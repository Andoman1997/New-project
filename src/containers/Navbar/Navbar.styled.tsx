import styled, { css } from 'styled-components';

export const NavbarContainer = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 96px;
    background-color: ${colors.white};
  `};
`;

export const StyledLink = styled.a`
  ${({ theme: { typography, radius } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 40px;
    border-radius: ${radius.small};
    font-weight: 700;
    font-size: ${typography.text.t16};
    line-height: ${typography.text.t14};
    font-feature-settings: 'ss03' on;
  `};
`;

export const LoginLink = styled(StyledLink)`
  ${({ theme: { colors, indents } }) => css`
    background-color: ${colors.white};
    color: ${colors.grey17};
    border: 1px solid ${colors.whiteF4};
    margin-right: ${indents.i12};
  `};
`;

export const SignUpLink = styled(StyledLink)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grey17};
    color: ${colors.white};
  `};
`;

export const LeftContainer = styled.div`
  display: flex;
  padding-left: 112px;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 112px;
`;

export const NavbarLinkContainer = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    justify-content: center;
    flex: 2;
    gap: ${indents.i50};
  `};
`;

export const NavbarLink = styled.a`
  ${({ theme: { typography, colors } }) => css`
    font-weight: 700;
    font-size: ${typography.text.t16};
    line-height: ${typography.text.t16};
    color: ${colors.grey73};
    font-feature-settings: 'ss03' on;

    @media (max-width: 1024px) {
      display: none;
    }
  `};
`;
