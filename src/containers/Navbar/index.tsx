import React from 'react';
import Link from 'next/link';
import Logo from 'components/Logo';

import {
  LeftContainer,
  LoginButton,
  MiddleContainer,
  NavbarContainer,
  RightContainer,
  SignUpButton,
} from './styled';
import NavLinks from '../NavLinks';

const Navbar = () => {
  return (
    <nav>
      <NavbarContainer>
        <LeftContainer>
          <Logo />
        </LeftContainer>

        <MiddleContainer>
          <NavLinks />
        </MiddleContainer>

        <RightContainer>
          <Link href="/login" passHref>
            <LoginButton>Login</LoginButton>
          </Link>
          <Link href="/signup" passHref>
            <SignUpButton>Sign Up</SignUpButton>
          </Link>
        </RightContainer>
      </NavbarContainer>
    </nav>
  );
};

export default Navbar;
