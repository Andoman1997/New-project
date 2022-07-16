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
  line-height: 100%;
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

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 112px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 112px;
`;
