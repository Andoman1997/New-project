import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoLarge from '/public/static/logos/logo-large.svg';

import {
  HeaderContainer,
  LeftContainer,
  LoginLink,
  RightContainer,
  SignUpLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <Image src={logoLarge} alt="Provineer Logo" title="Provineer Logo" />
      </LeftContainer>

      <RightContainer>
        <Link href="/login" passHref>
          <LoginLink>Login</LoginLink>
        </Link>
        <Link href="/signup" passHref>
          <SignUpLink>Sign Up</SignUpLink>
        </Link>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
