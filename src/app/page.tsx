import { Slider } from '@/app/ui/Slider';

export default function Home() {
  return (
    <div
      className={
        'w-full h-full flex flex-col justify-start items-center pt-18 lg:pt-24 pb-6 px-3 md:px-10 lg:px-32'
      }>
      <h2 className={'text-[#303030] text-[40px] font-bold mb-2 tracking-[-1.6px]'}>
        4 simple steps to enjoy
      </h2>
      <div className={'text-[#565656] align-middle font-medium'}>
        From sign-up to first withdrawal, it's this simple
      </div>
      <Slider />
    </div>
  );
}
