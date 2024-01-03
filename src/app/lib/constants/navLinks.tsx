import { JSX } from 'react';

import { Bonus } from '@/app/lib/icons/Bonus';
import { Ongoing } from '@/app/lib/icons/Ongoing';
import { Discover } from '@/app/lib/icons/Discover';
import { Withdraw } from '@/app/lib/icons/Withdraw';

type Link = { name: string; href: string; icon: JSX.Element };

export const links: Link[] = [
  { name: 'Discover', href: '/discover', icon: <Discover /> },
  { name: 'Withdraw', href: '/withdraw', icon: <Withdraw /> },
  { name: 'Ongoing', href: '/ongoing', icon: <Ongoing /> },
  { name: 'Bonus', href: '/bonus', icon: <Bonus /> }
];
