import React from 'react';
import { LogoIcon } from 'src/components/Logo/Logo.styled';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/home" passHref>
      <LogoIcon />
    </Link>
  );
}

export default Logo;
