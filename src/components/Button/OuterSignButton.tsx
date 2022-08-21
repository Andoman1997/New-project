import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from 'src/pages/signup/styled';

const OuterSignInButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OuterSignInButton = styled(SubmitButton)`
  background-color: #ffffff;
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  height: 50px;
  margin: auto 0;

  :hover {
    background-color: #f4f4f4;
  }
`;

const InnerBtnWrapper = styled.div`
  display: flex;
  column-gap: 9px;
  justify-content: center;
  align-items: center;
`;

const GoogleIcon = styled.div`
  background-image: url('/static/icons/brand/Google.svg');
  height: 16px;
  width: 16px;
`;

const AppleIcon = styled.div`
  background-image: url('/static/icons/brand/Apple.svg');
  height: 16px;
  width: 16px;
`;

const StudentIcon = styled.div`
  background-image: url('/static/icons/brand/Student.svg');
  height: 16px;
  width: 16px;
`;

export const OuterSignButtonText = styled.span`
  font-size: 16px;
  line-height: 100%;
  color: #171717;
`;

const OuterSignButton = () => {
  return (
    <OuterSignInButtonWrapper>
      <OuterSignInButton>
        <InnerBtnWrapper>
          <GoogleIcon />
          <OuterSignButtonText>Continue with Google</OuterSignButtonText>
        </InnerBtnWrapper>
      </OuterSignInButton>
      <OuterSignInButton>
        <InnerBtnWrapper>
          <AppleIcon />
          <OuterSignButtonText>Continue with Apple ID</OuterSignButtonText>
        </InnerBtnWrapper>
      </OuterSignInButton>
      <OuterSignInButton>
        <InnerBtnWrapper>
          <StudentIcon />
          <OuterSignButtonText>Continue with Student Portal</OuterSignButtonText>
        </InnerBtnWrapper>
      </OuterSignInButton>
    </OuterSignInButtonWrapper>
  );
};

export default OuterSignButton;
