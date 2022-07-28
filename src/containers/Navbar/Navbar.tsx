import React from 'react';
import Link from 'next/link';

import {
  LeftContainer,
  LoginButton,
  LogoIcon,
  MiddleContainer,
  NavbarContainer,
  NavLink,
  NavLinkContainer,
  RightContainer,
  SignUpButton,
} from './Navbar.styled';
import { NavLinks } from '../NavLinks';
import { useMediaQuery } from 'src/Hooks/useMediaQuery';
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
            <NavLinkContainer>
              {NavLinks.map(({ name, to }) => (
                <Link href={to}>
                  <NavLink>{name}</NavLink>
                </Link>
              ))}
            </NavLinkContainer>
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
