import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors, radius } }) => css`
    display: flex;
    margin: 145px auto;
    max-width: 600px;
    height: 790px;
    background-color: ${colors.white};
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    flex-direction: column;
  `};
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

export const FormContainer = styled.form`
  ${({ theme: { indents } }) => css`
    margin: 0 ${indents.i32};
    height: 520px;
    max-width: 530px;
  `};
`;

export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 124px;
`;

export const NameInputGroup = styled.div`
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  ${({ theme: { colors, indents, typography } }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: 'Satoshi Variable', sans-serif;
    font-feature-settings: 'ss03' on;

    label {
      position: absolute;
      pointer-events: none;
      color: ${colors.greyA3};
      transform: translate(0, 18px) scale(1);
      transform-origin: top left;
      transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      line-height: ${typography.text.t20};
      left: 16px;
      padding-left: ${indents.i10};
    }

    &:focus-within label {
      transform: translate(5px, 10px) scale(0.8);
    }
  `};
`;

export const Input = styled.input`
  ${({ theme: { indents, colors, radius } }) => css`
    height: 55px;
    width: 390px;
    margin-left: ${indents.i12};
    margin-bottom: ${indents.i12};
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    color: ${colors.grey17};
    padding: ${indents.i20} ${indents.i16} ${indents.i4} ${indents.i16};
    outline: none;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &:hover {
      border-color: ${colors.grey17};
    }

    &:focus {
      outline: none !important;
      border: 1px solid ${colors.grey17};
      box-shadow: 0 0 10px ${colors.greyA9};
    }

    &:focus,
    &:not(:placeholder-shown),
    &:-webkit-autofill {
      + label {
        transform: translate(5px, 10px) scale(0.8);
      }
    }
  `};
`;

export const TextBox = styled.textarea`
  ${({ theme: { indents, colors, radius } }) => css`
    margin: ${indents.i12} auto;
    height: 93px;
    width: 100%;
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    color: ${colors.grey17};
    padding: ${indents.i20} 0 ${indents.i4} ${indents.i22};
    outline: none;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &:hover {
      border-color: ${colors.grey17};
    }

    &:focus {
      outline: none !important;
      border: 1px solid ${colors.grey17};
      box-shadow: 0 0 10px ${colors.greyA9};
    }

    &:focus,
    &:not(:placeholder-shown),
    &:-webkit-autofill {
      + label {
        transform: translate(0, 10px) scale(0.8);
      }
    }
  `};
`;

export const TextBoxWrapper = styled(InputWrapper)`
  ${({ theme: { indents } }) => css`
    label {
      padding: ${indents.i12} ${indents.i10} 0;
      transform: translate(0, 30px) scale(1);
    }

    &:focus-within label {
      transform: translate(0, 10px) scale(0.8);
    }
  `};
`;
