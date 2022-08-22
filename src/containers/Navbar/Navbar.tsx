import React from 'react';
import Link from 'next/link';

import {
  LeftContainer,
  LoginButton,
  MiddleContainer,
  NavbarContainer,
  NavLink,
  NavLinkContainer,
  RightContainer,
  SignUpButton,
} from './Navbar.styled';
import { NavLinks } from '../NavLinks';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import dynamic from 'next/dynamic';
import Logo from 'src/components/Logo/Logo';

const Navbar = () => {
  const isDesktop = useMediaQuery(b => b.up('xl'));
  const MobileNavbar = dynamic(() => import('../MobileNavbar/MobileNavbar'), { ssr: false });
  return (
    <>
      <header>
        {isDesktop ? (
          <NavbarContainer>
            <LeftContainer>
              <Logo />
            </LeftContainer>

            <MiddleContainer>
              <NavLinkContainer>
                {NavLinks.map(({ id, name, to }) => (
                  <Link href={to} key={id}>
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
      </header>
    </>
  );
};

export default Navbar;
