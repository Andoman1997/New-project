import styled, { css } from 'styled-components';

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
      left: 18px;
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
    margin-left: ${indents.i12};
    margin-bottom: ${indents.i12};
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    color: ${colors.grey17};
    padding: ${indents.i16} 0 ${indents.i4} 14px;
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
        transform: translate(0, 5px) scale(0.8);
      }
    }
  `};
`;

export const TextBox = styled.textarea`
  ${({ theme: { indents, colors, radius } }) => css`
    height: 93px;
    width: 100%;
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};
    color: ${colors.grey17};
    padding: ${indents.i16} 0 ${indents.i4} ${indents.i14};
    margin: auto auto ${indents.i12};
    outline: none;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    resize: none;

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
        transform: translate(0, 5px) scale(0.8);
      }
    }
  `};
`;

export const TextBoxWrapper = styled(InputWrapper)`
  label {
    left: 6px;
  }
`;

export const InfoInputWrapper = styled(TextBoxWrapper)``;

export const InfoInput = styled(Input)`
  ${({ theme: { indents } }) => css`
    width: 100%;
    margin: auto auto ${indents.i12};
    padding: ${indents.i16} 0 ${indents.i4} ${indents.i14};
  `};
`;
