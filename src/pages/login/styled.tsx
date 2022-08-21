import styled, { css } from 'styled-components';
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
  max-width: 450px;
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
  ${({ theme: { indents } }) => css`
    margin-top: ${indents.i12};
  `};
`;

export const SignInFooter = styled(AgreementWrapper)`
  flex-direction: row;
`;

export const PassRecoverText = styled.span`
  ${({ theme: { typography, colors } }) => css`
    font-weight: 550;
    font-size: ${typography.text.t16};
    line-height: 100%;
    color: ${colors.grey73};
    cursor: pointer;
  `};
`;
export const SignUpText = styled(SignInText)``;
