import React from 'react';
import { AvatarIcon, NavbarContainer } from './MobileNavbar.styled';
import Logo from 'src/components/Logo/Logo';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import MobileNavLinks from 'src/containers/MobileNavlinks/MobileNavLinks';

const MobileNavbar = () => {
  const isMobile = useMediaQuery(b => b.down('xxl'));

  return (
    <NavbarContainer>
      {isMobile && <MobileNavLinks />}
      <Logo />
      <AvatarIcon />
    </NavbarContainer>
  );
};

export default MobileNavbar;
