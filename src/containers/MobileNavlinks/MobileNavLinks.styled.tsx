import styled, { css } from 'styled-components';

export const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LinksWrapper = styled.ul`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.white};
    position: fixed;
    top: 65px;
    left: 0;
  `};
`;

export const NavLink = styled.a`
  ${({ theme: { typography, colors, indents } }) => css`
    display: flex;
    align-items: center;
    margin: 0 ${indents.i16};
    color: ${colors.grey17};
    height: 65px;
    font-weight: 700;
    line-height: ${typography.text.t16};
    font-size: ${typography.text.t16};
    font-feature-settings: 'ss03' on;
    border-bottom: 1px solid ${colors.whiteF4};
  `};
`;
