import Image from 'next/image';
import LogoSvg from '@/app/lib/images/logo.svg';

export const Logo = () => <Image src={LogoSvg} alt={'Scrambly Logo'} width={167} />;
