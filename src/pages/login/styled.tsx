import styled from 'styled-components';
import {
  AgreementWrapper,
  NameInputContainer,
  NameInputGroup,
  SignInText,
  SignUpContainer,
  SignUpFormContainer,
  SubmitButton,
} from 'src/pages/signup/styled';

export const SignInContainer = styled(SignUpContainer)`
  width: 450px;
  height: 600px;
  margin: 240px auto;
`;

export const SignInFormContainer = styled(SignUpFormContainer)`
  height: 185px;
`;

export const InputContainer = styled(NameInputContainer)`
  height: 184px;
  flex-direction: column;
`;

export const InputGroup = styled(NameInputGroup)``;

export const SignInSubmitButton = styled(SubmitButton)`
  margin-top: 12px;
`;

export const SignInFooter = styled(AgreementWrapper)`
  flex-direction: row;
`;

export const PassRecoverText = styled.span`
  font-weight: 550;
  font-size: 16px;
  line-height: 100%;
  color: #737373;
  cursor: pointer;
`;

export const SignUpText = styled(SignInText)``;
