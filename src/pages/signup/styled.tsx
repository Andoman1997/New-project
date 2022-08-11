import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors, radius } }) => css`
    display: flex;
    margin: 145px auto;
    width: 600px;
    height: 790px;
    background-color: ${colors.white};
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    flex-direction: column;
  `};
`;

export const FormContainer = styled.form`
  ${({ theme: { indents } }) => css`
    margin: 0 ${indents.i32};
    height: 520px;
    width: 530px;
  `};
`;

export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
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

export const NameInputGroup = styled.div`
  flex-direction: column;
`;
