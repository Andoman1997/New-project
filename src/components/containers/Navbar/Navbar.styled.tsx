import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  background-color: #ffffff;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  font-feature-settings: 'ss03' on;
`;

export const LoginLink = styled(StyledLink)`
  background-color: #ffffff;
  color: #171717;
  border: 1px solid #f4f4f4;
  margin-right: 12px;
`;

export const SignUpLink = styled(StyledLink)`
  background-color: #171717;
  color: #ffffff;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 20%;
  padding-left: 112px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 20%;
  justify-content: flex-end;
  padding-right: 112px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  flex: 60%;
`;

export const NavbarLink = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #737373;
  font-feature-settings: 'ss03' on;

  @media (max-width: 1280px) {
    display: none;
  }
`;
