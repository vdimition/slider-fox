'use client';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import Image from 'next/image';

import fox1 from '@/app/lib/images/fox_1.png';
import fox2 from '@/app/lib/images/fox_2.png';
import fox3 from '@/app/lib/images/fox_3.png';
import fox4 from '@/app/lib/images/fox_4.png';
import { Arrow } from '@/app/lib/icons/Arrow';

const slides = [
  {
    image: fox1,
    imageClassName: 'max-w-[164px] bottom-[50px] left-[12px] rotate-[-1deg]',
    imageActiveClassName: 'max-w-[302px] bottom-[14px] left-[-27px]',
    title: 'Sign up for a 500 coin bonus',
    content: 'Gain access to wonderful free games and apps to explore, play and win coins.'
  },
  {
    image: fox2,
    imageClassName: 'max-w-[174px] bottom-[49px] left-[17px] rotate-[2deg]',
    imageActiveClassName: 'max-w-[325px] bottom-[15px] left-[-12px] rotate-0',
    title: 'Choose your favorite app or game',
    content:
      'Browse “Discovery” page, select the app or game you love, tap "Get Started" to begin playing and reach 1000 coins on Scrambly.'
  },
  {
    image: fox3,
    imageClassName: 'max-w-[156px] bottom-[50px] left-[25px] rotate-[2deg]',
    imageActiveClassName: 'max-w-[294px] bottom-[13px] left-[-5px] rotate-0',
    title: 'Secure your account',
    content:
      'Complete our super-simple, lightning-fast ID verification to secure your account and earnings - it takes 4 minutes most.'
  },
  {
    image: fox4,
    imageClassName: 'max-w-[170px] bottom-[48px] left-[10px]',
    imageActiveClassName: 'max-w-[304px] bottom-[15px] left-[-14px]',
    title: 'Make your 1st withdrawal',
    content:
      'Head to our “Withdraw” page, choose your preferred cashout method and redeem your coins. Your earnings will arrive in your wallet within 3 minutes – nice!'
  }
];

export const Slider = () => {
  const sliderWrapper = useRef<HTMLDivElement | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const onPrev = () => setActiveSlide((current) => (current > 0 ? current - 1 : 0));
  const onNext = () =>
    setActiveSlide((current) => (current > slides.length - 1 ? slides.length - 1 : current + 1));

  return (
    <div>
      <div className={'flex relative'}>
        <button
          onClick={onPrev}
          disabled={activeSlide <= 0}
          className={clsx(
            'w-6 h-6 rotate-180 absolute left-[-100px] bottom-[137px] transition-all duration-1000',
            activeSlide <= 0 ? 'opacity-0' : 'opacity-0 lg:opacity-100'
          )}>
          <Arrow />
        </button>
        <div className={'w-[750px] overflow-hidden flex justify-center'}>
          <div
            ref={sliderWrapper}
            className={
              'transition-all duration-1000 flex items-center w-full justify-center overflow-hidden'
            }>
            <div className={'w-[296px] h-[433px] flex items-end overflow-visible relative'}>
              <div
                className={`absolute left-0 bottom-0 h-72 flex items-end gap-4 transition-all duration-1000`}
                style={{ left: `-${activeSlide * 218}px` }}>
                {slides.map(({ title, image, imageClassName, imageActiveClassName }, index) => {
                  const isActive = index === activeSlide;

                  return (
                    <button
                      key={title}
                      onClick={() => setActiveSlide(index)}
                      className={clsx('w-full h-full relative flex items-center')}>
                      <div
                        className={clsx(
                          'rounded-[40px] transition-all duration-1000 h-64',
                          isActive
                            ? 'w-[295px] min-w-[295px] max-w-[295px] h-[260px] min-h-[260px] max-h-[260px] bg-[#ff69151a]'
                            : 'w-[205px] min-w-[205px] max-w-[205px] h-[190px] min-h-[190px] max-h-[190px] bg-[#EAEAEA]'
                        )}
                      />
                      <Image
                        src={image}
                        alt={title}
                        className={clsx(
                          'transition-all duration-1000 absolute',
                          isActive ? imageActiveClassName : imageClassName
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onNext}
          disabled={activeSlide >= slides.length - 1}
          className={clsx(
            'w-6 h-6 absolute right-[-100px] bottom-[137px] transition-all duration-1000',
            activeSlide >= slides.length - 1 ? 'opacity-0' : 'opacity-0 lg:opacity-100'
          )}>
          <Arrow />
        </button>
      </div>
      <div className={'w-full h-32 mt-1 flex justify-center relative'}>
        {slides.map(({ title, content }, index) => (
          <div
            key={title}
            className={clsx(
              'transition-all duration-1000 absolute top-0 left-0 w-full flex justify-center',
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            )}>
            <div className={'w-[375px]'}>
              <div
                className={
                  'text-center w-full text-[#303030] text-2xl font-bold tracking-[-0.5px;]'
                }>
                {title}
              </div>
              <div className={'text-center text-[#565656] font-medium text-sm mt-2'}>{content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={'flex justify-center gap-1 my-6'}>
        {slides.map(({ title }, index) => (
          <button
            onClick={() => setActiveSlide(index)}
            key={title}
            className={clsx(
              'h-1.5 transition-all duration-1000 rounded-full',
              index === activeSlide ? 'w-8 bg-[#FF6915]' : 'w-3 bg-[#DBDBDB]'
            )}
          />
        ))}
      </div>
    </div>
  );
};
