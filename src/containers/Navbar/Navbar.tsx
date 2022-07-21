import React from 'react';
import Link from 'next/link';
import Logo from 'components/Logo';

import {
  LeftContainer,
  LoginLink,
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
  RightContainer,
  SignUpLink,
} from './Navbar.styled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftContainer>
        <Logo />
      </LeftContainer>

      <NavbarLinkContainer>
        <Link href="/HowItWorks" passHref>
          <NavbarLink>How it works</NavbarLink>
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

export default Navbar;
