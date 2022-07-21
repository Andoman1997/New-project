import React from 'react';
import Link from 'next/link';
import { NavLink, NavLinkContainer } from './NavLinks.styled';

function NavLinks() {
  return (
    <NavLinkContainer>
      <Link href="/HowItWorks" passHref>
        <NavLink>How it works</NavLink>
      </Link>
      <Link href="/about" passHref>
        <NavLink>About</NavLink>
      </Link>
      <Link href="/faq" passHref>
        <NavLink>FAQ</NavLink>
      </Link>
    </NavLinkContainer>
  );
}

export default NavLinks;
