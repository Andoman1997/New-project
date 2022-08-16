import React from 'react';
import { LogoIcon } from 'src/components/Logo/Logo.styled';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/home" passHref>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
