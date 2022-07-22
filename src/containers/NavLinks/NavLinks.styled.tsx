import styled, { css } from 'styled-components';

export const NavLinkContainer = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    justify-content: center;
    flex: 2;
    gap: ${indents.i50};
  `};
`;

export const NavLink = styled.a`
  ${({ theme: { typography, colors, breakpoints } }) => css`
    font-weight: 700;
    font-size: ${typography.text.t16};
    line-height: ${typography.text.t16};
    color: ${colors.grey73};
    font-feature-settings: 'ss03' on;

    ${breakpoints.down('md')} {
      display: none;
    }
  `};
`;
