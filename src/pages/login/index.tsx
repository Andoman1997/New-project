import React from 'react';
import {
  InputContainer,
  InputGroup,
  PassRecoverText,
  SignInContainer,
  SignInFooter,
  SignInFormContainer,
  SignInSubmitButton,
  SignUpText,
} from 'src/pages/login/styled';
import { ArrowRightIcon, Title } from 'src/pages/signup/styled';
import EmailInput from 'src/components/Inputs/EmailInput';
import PasswordInput from 'src/components/Inputs/PasswordInput';
import Link from 'next/link';

function Login() {
  return (
    <SignInContainer>
      <Title>Sign In</Title>
      <SignInFormContainer>
        <InputContainer>
          <InputGroup>
            <EmailInput label="Email address" />
            <PasswordInput label="Password" />
            <SignInSubmitButton>
              Sign In <ArrowRightIcon />
            </SignInSubmitButton>
          </InputGroup>
        </InputContainer>

        <SignInFooter>
          <Link href={'/forgot-password'} passHref>
            <PassRecoverText>Forgot Password?</PassRecoverText>
          </Link>
          <Link href="/signup" passHref>
            <SignUpText>Sign Up</SignUpText>
          </Link>
        </SignInFooter>
      </SignInFormContainer>
    </SignInContainer>
  );
}

export default Login;
