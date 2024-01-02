'use client';

import { links } from '@/app/lib/constants/navLinks';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={
        'flex lg:hidden justify-around w-full pt-2.5 px-2 pb-3.5 border-t border-t-[#EAEAEA] bg-[#F5F5F5] sticky bottom-0 left-0'
      }>
      {links.map(({ icon, name, href }) => (
        <Link
          key={name}
          href={href}
          className={clsx(
            'flex flex-col items-center gap-0.5 text-[#565656] hover:text-[#FF6915] text-[10px]',
            {
              'text-[#FF6915]': pathname === href
            }
          )}>
          <div className={'w-6'}>{icon}</div>
          <span>{name}</span>
        </Link>
      ))}
    </footer>
  );
};
