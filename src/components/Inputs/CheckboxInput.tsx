import React from 'react';
import styled, { css } from 'styled-components';

const CheckboxLabel = styled.label`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.text.t16};
  `};
`;

const CheckboxInput = styled.input`
  ${({ theme: { colors, radius, indents } }) => css`
    & {
      display: none;
    }

    & + label {
      position: relative;
    }

    & + label:before {
      content: '';
      position: relative;
      display: inline-block;
      border: 1px solid ${colors.grey17};
      border-radius: ${radius.extraSmall};
      width: 16px;
      height: 16px;
      margin-right: ${indents.i8};
      background-color: ${colors.whiteF4};
      vertical-align: sub;
      bottom: 5%;
    }

    & + label:after {
      background: url('/static/icons/Check.svg');
      height: 8px;
      width: 8px;
      left: 4px;
      top: 6px;
    }

    label:before,
    & + label:after {
      position: absolute;
    }

    &:checked + label:after {
      content: '';
    }
  `};
`;

const Checkbox: React.FC = () => {
  return (
    <>
      <CheckboxInput type="checkbox" id="agreement" />
      <CheckboxLabel htmlFor="agreement">I agree with</CheckboxLabel>
    </>
  );
};

export default Checkbox;
