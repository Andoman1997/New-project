import React from 'react';
import Link from 'next/link';

import {
  LeftContainer,
  LoginButton,
  LogoIcon,
  MiddleContainer,
  NavbarContainer,
  RightContainer,
  SignUpButton,
} from './Navbar.styled';
import NavLinks from '../NavLinks/NavLinks';
import { useMediaQuery } from '../../Hooks/useMediaQuery';
import dynamic from 'next/dynamic';

const Navbar = () => {
  const isDesktop = useMediaQuery(b => b.up('xl'));
  const MobileNavbar = dynamic(() => import('../MobileNavbar/MobileNavbar'), { ssr: false });
  return (
    <>
      {isDesktop ? (
        <NavbarContainer>
          <LeftContainer>
            <LogoIcon />
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
      ) : (
        <MobileNavbar />
      )}
    </>
  );
};

export default Navbar;
