import styled, { css } from 'styled-components';

export const NavbarContainer = styled.div`
  ${({ theme: { colors, indents } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    background-color: ${colors.white};
    margin-right: ${indents.i16};
    margin-left: ${indents.i16};
  `};
`;
export const BurgerIcon = styled.div`
  background-image: url(/static/icons/Burger.svg);
  width: 24px;
  height: 24px;
`;

export const CloseIcon = styled.div`
  background-image: url(/static/icons/Close.svg);
  width: 24px;
  height: 24px;
`;

export const AvatarIcon = styled.div`
  background-image: url(/static/icons/Avatar.svg);
  width: 32px;
  height: 32px;
`;
