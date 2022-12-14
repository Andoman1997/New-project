import styled, { css } from 'styled-components';

export const NavbarContainer = styled.nav`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 96px;
    background-color: ${colors.white};
  `};
`;

export const StyledButton = styled.button`
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
    border: none;
    cursor: pointer;
  `};
`;

export const LoginButton = styled(StyledButton)`
  ${({ theme: { colors, indents } }) => css`
    background-color: ${colors.white};
    color: ${colors.grey17};
    border: 1px solid ${colors.whiteF4};
    margin-right: ${indents.i12};
  `};
`;

export const SignUpButton = styled(StyledButton)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grey17};
    color: ${colors.white};

    &:hover {
      color: ${colors.white};
    }
  `};
`;

export const LeftContainer = styled.div`
  display: flex;
  padding-left: 112px;
`;

export const MiddleContainer = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    justify-content: center;
    flex: 2;
    gap: ${indents.i50};
  `};
`;
export const NavLinkContainer = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    justify-content: center;
    flex: 2;
    gap: ${indents.i50};
  `};
`;

export const NavLink = styled.a`
  ${({ theme: { typography, colors } }) => css`
    font-weight: 700;
    font-size: ${typography.text.t16};
    line-height: ${typography.text.t16};
    color: ${colors.grey73};
  `};
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 112px;
`;
