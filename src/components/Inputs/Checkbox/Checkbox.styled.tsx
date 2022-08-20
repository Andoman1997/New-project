import styled, { css } from 'styled-components';

export const CheckboxInput = styled.input`
  ${({ theme: { indents, typography, colors, radius } }) => css`
    display: none;

    & + label {
      position: relative;
      display: inline-block;
      cursor: pointer;
      padding-left: ${indents.i24};
      font-size: ${typography.text.t16};
    }

    & + label::before {
      content: '';
      position: absolute;
      left: 0;
      top: ${indents.i4};
      width: 16px;
      height: 16px;
      background: ${colors.whiteF4};
      border: 1px solid ${colors.grey17};
      border-radius: ${radius.extraSmall};
    }

    & + label::after {
      background: url('/static/icons/Check.svg');
      height: 8px;
      width: 8px;
      left: ${indents.i4};
      top: ${indents.i8};
    }

    & + label::after {
      position: absolute;
    }

    &:checked + label::after {
      content: '';
    }
  `};
`;
