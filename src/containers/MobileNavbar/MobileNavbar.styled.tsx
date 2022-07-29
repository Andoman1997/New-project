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

export const AvatarIcon = styled.div`
  background-image: url(/static/icons/Avatar.svg);
  width: 32px;
  height: 32px;
`;
