import React, { useState } from 'react';
import { AvatarIcon, BurgerIcon, CloseIcon, NavbarContainer } from './MobileNavbar.styled';
import Logo from 'src/components/Logo/Logo';

const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavbarContainer>
      {isOpen ? <CloseIcon /> : <BurgerIcon />}
      <Logo />
      <AvatarIcon />
    </NavbarContainer>
  );
};

export default MobileNavbar;
