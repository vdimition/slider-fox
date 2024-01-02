'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { Logo } from '@/app/ui/Logo';
import { links } from '@/app/lib/constants/navLinks';
import { LogoSmall } from '@/app/ui/LogoSmall';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={
        'flex w-full justify-between p-3 md:px-10 lg:py-6 lg:px-[120px] items-center sticky top-0 left-0 bg-white'
      }>
      <Link href={'/'}>
        <div className={'hidden md:block'}>
          <Logo />
        </div>
        <div className={'md:hidden'}>
          <LogoSmall />
        </div>
      </Link>

      <div className={'hidden lg:flex gap-8'}>
        {links.map(({ icon, name, href }) => (
          <Link
            key={name}
            href={href}
            className={clsx(
              'flex items-center gap-1 text-[#565656] hover:text-[#FF6915] font-semibold',
              {
                'text-[#FF6915]': pathname === href
              }
            )}>
            <div className={'w-5'}>{icon}</div>
            <span>{name}</span>
          </Link>
        ))}
      </div>
      <div>
        <button className={'py-3 px-5 rounded-full bg-[#FF6915] text-white font-semibold'}>
          Sign in
        </button>
      </div>
    </header>
  );
};
