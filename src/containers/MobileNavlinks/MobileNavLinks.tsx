import React, { useState } from 'react';
import { LinksWrapper, NavLink, NavLinksContainer } from './MobileNavLinks.styled';
import Link from 'next/link';
import { MenuToggle } from 'src/containers/menuToggle';
import { NavLinks } from 'src/containers/NavLinks';

const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {NavLinks.map(({ id, name, to }) => (
            <Link href={to} key={id}>
              <NavLink>{name}</NavLink>
            </Link>
          ))}
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
};

export default MobileNavLinks;
