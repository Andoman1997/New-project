import React from 'react';
import { AvatarIcon, BurgerIcon, LogoIcon, NavbarContainer } from './MobileNavbar.styled';

const MobileNavbar = () => {
  return (
    <NavbarContainer>
      <BurgerIcon />
      <LogoIcon />
      <AvatarIcon />
    </NavbarContainer>
  );
};

export default MobileNavbar;
