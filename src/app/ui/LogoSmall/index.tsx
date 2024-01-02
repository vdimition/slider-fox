import Image from 'next/image';
import LogoSmallSvg from '@/app/lib/images/logo-small.svg';

export const LogoSmall = () => <Image src={LogoSmallSvg} alt={'Scrambly Logo'} />;
