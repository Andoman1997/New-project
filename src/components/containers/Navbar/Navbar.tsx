import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoLarge from '/public/static/logos/logo-large.svg';

import {
  LeftContainer,
  LoginLink,
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
  RightContainer,
  SignUpLink,
} from './Navbar.styled';

const Header = () => {
  return (
    <NavbarContainer>
      <LeftContainer>
        <Image src={logoLarge} alt="Provineer Logo" title="Provineer Logo" />
      </LeftContainer>

      <NavbarLinkContainer>
        <Link href="/HowItWorks" passHref>
          <NavbarLink>How It works</NavbarLink>
        </Link>
        <Link href="/about" passHref>
          <NavbarLink>About</NavbarLink>
        </Link>
        <Link href="/faq" passHref>
          <NavbarLink>FAQ</NavbarLink>
        </Link>
      </NavbarLinkContainer>

      <RightContainer>
        <Link href="/login" passHref>
          <LoginLink>Login</LoginLink>
        </Link>
        <Link href="/signup" passHref>
          <SignUpLink>Sign Up</SignUpLink>
        </Link>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Header;
