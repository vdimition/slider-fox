'use client';
import { JSX } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from '@/app/ui/Logo';
import { Bonus } from '@/app/lib/icons/Bonus';
import { Ongoing } from '@/app/lib/icons/Ongoing';
import { Discover } from '@/app/lib/icons/Discover';
import { Withdraw } from '@/app/lib/icons/Withdraw';
import { LogoSmall } from '@/app/ui/LogoSmall';
import clsx from 'clsx';

const links: { name: string; href: string; icon: JSX.Element }[] = [
  { name: 'Discover', href: '/discover', icon: <Discover /> },
  { name: 'Bonus', href: '/bonus', icon: <Bonus /> },
  { name: 'Ongoing', href: '/ongoing', icon: <Ongoing /> },
  { name: 'Withdraw', href: '/withdraw', icon: <Withdraw /> }
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={'flex w-full justify-between p-3 md:px-10 lg:py-6 lg:px-[120px] items-center'}>
      <Link href={'/'}>
        <div className={'hidden md:block'}>
          <Logo />
        </div>
        <div className={'md:hidden'}>
          <LogoSmall />
        </div>
      </Link>

      <div className={'flex gap-8'}>
        {links.map(({ icon, name, href }) => (
          <Link
            key={name}
            href={href}
            className={clsx(
              'hidden lg:flex items-center gap-1 text-[#565656] hover:text-[#FF6915] font-semibold',
              {
                'text-[#FF6915]': pathname === href
              }
            )}>
            {icon}
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
