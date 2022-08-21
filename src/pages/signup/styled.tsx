import styled, { css } from 'styled-components';
import { InputWrapper } from 'src/components/Inputs/Input.styled';
import Link from 'next/link';
import { SignUpButton } from 'src/containers/Navbar/Navbar.styled';

export const SignUpContainer = styled.div`
  ${({ theme: { colors, radius } }) => css`
    display: flex;
    margin: 145px auto;
    max-width: 590px;
    height: 790px;
    background-color: ${colors.white};
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    flex-direction: column;
  `};
`;
export const AvatarUploadWrapper = styled.div`
  height: 124px;
  width: 124px;
`;

export const Title = styled.p`
  ${({ theme: { colors, typography, indents } }) => css`
    text-align: center;
    height: 45px;
    width: 100%;
    line-height: 45px;
    font-weight: 800;
    margin: ${indents.i32} auto;
    font-size: ${typography.text.t40};
    color: ${colors.grey17};
  `};
`;

export const SignUpFormContainer = styled.form`
  ${({ theme: { indents } }) => css`
    margin: 0 ${indents.i32};
    height: 520px;
    max-width: 530px;
  `};
`;

export const NameInputContainer = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    flex-direction: row;
    height: 124px;
    margin-bottom: ${indents.i12};
  `};
`;

export const NameInputGroup = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const SelectBox = styled(InputWrapper)`
  flex-direction: row;
  gap: 12px;
`;

export const CheckboxWrapper = styled.div`
  width: auto;
`;

export const AgreementWrapper = styled.div`
  ${({ theme: { indents } }) => css`
    display: flex;
    margin-top: ${indents.i32};
    justify-content: space-between;
  `};
`;

export const TermsLink = styled(Link)`
  font-weight: bold;
  cursor: pointer;
`;

export const Terms = styled.span`
  ${({ theme: { indents, colors } }) => css`
    font-weight: bold;
    cursor: pointer;
    margin-left: ${indents.i6};
    border-bottom: 1px solid ${colors.black};
  `};
`;

export const SignInText = styled.span`
  ${({ theme: { typography, colors } }) => css`
    cursor: pointer;
    color: ${colors.royalBlue};
    font-size: ${typography.text.t16};
    font-weight: 550;
  `};
`;

export const SubmitButton = styled(SignUpButton)`
  margin-top: 32px;
  width: 100%;
  gap: 8px;
`;

export const ArrowRightIcon = styled.div`
  background-image: url('/static/icons/ArrowRight.svg');
  height: 16px;
  width: 16px;
`;
