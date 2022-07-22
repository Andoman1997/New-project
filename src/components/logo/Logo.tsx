import React from 'react';
import Image from 'next/image';
import logoLarge from '/public/static/logos/logo-large.svg';

export function Logo() {
  return (
    <>
      <Image src={logoLarge} alt="Provineer Logo" title="Provineer Logo" />
    </>
  );
}

export default Logo;
