import styled, { css } from 'styled-components';
import { InputWrapper } from 'src/components/Inputs/Input.styled';

export const Container = styled.div`
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

export const FormContainer = styled.form`
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
