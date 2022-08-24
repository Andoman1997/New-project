import React from 'react';
import styled, { css } from 'styled-components';
import { SubmitButton } from 'src/pages/signup/styled';

const OuterSignInButtonWrapper = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    flex-direction: row;
    gap: ${indents.i8};
  `};
`;
const OuterSignInButton = styled(SubmitButton)`
  ${({ theme: { radius, colors } }) => css`
    background-color: ${colors.white};
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    height: 50px;
    margin: auto 0;

    :hover {
      background-color: ${colors.whiteF4};
    }
  `};
`;

const InnerBtnWrapper = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    column-gap: ${indents.i8};
    justify-content: center;
    align-items: center;
  `};
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

export const OuterSignButtonText = styled.p`
  ${({ theme: { typography, colors } }) => css`
    font-size: ${typography.text.t16};
    line-height: 100%;
    color: ${colors.grey17};
  `};
`;
const OuterSignButton = () => {
  return (
    <OuterSignInButtonWrapper>
      <OuterSignInButton>
        <InnerBtnWrapper>
          <GoogleIcon />
        </InnerBtnWrapper>
      </OuterSignInButton>
      <OuterSignInButton>
        <InnerBtnWrapper>
          <AppleIcon />
        </InnerBtnWrapper>
      </OuterSignInButton>
      <OuterSignInButton>
        <InnerBtnWrapper>
          <StudentIcon />
        </InnerBtnWrapper>
      </OuterSignInButton>
    </OuterSignInButtonWrapper>
  );
};

export default OuterSignButton;
