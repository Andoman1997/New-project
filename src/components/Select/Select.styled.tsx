import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  ${({ theme: { colors, indents, typography } }) => css`
    display: flex;
    position: relative;

    width: 100%;
    flex-direction: column;

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
export const SelectContent = styled.div`
  ${({ theme: { indents, colors, radius, typography } }) => css`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    height: 55px;
    background-color: ${colors.white};
    font-size: ${typography.text.t14};
    padding: ${indents.i16} ${indents.i16};
    border: 1px solid ${colors.whiteF4};
    border-radius: ${radius.small};

    span {
      font-style: normal;
      font-size: ${typography.text.t14};
      line-height: 140%;
      color: ${colors.greyA3};
    }

    &:hover {
      border-color: ${colors.grey17};
    }

    &:focus {
      outline: none !important;
      border: 1px solid ${colors.grey17};
      box-shadow: 0 0 10px ${colors.greyA9};
    }

    &:focus,
    &:active,
    &:not(:placeholder-shown),
    &:-webkit-autofill {
      + label {
        transform: translate(0, 5px) scale(0.8);
      }
    }
  `};
`;

export const Options = styled.div`
  ${({ theme: { indents, colors, radius, typography } }) => css`
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    padding: 0;
    width: 100%;

    option {
      display: flex;
      justify-content: space-between;
      background-color: ${colors.white};
      font-size: ${typography.text.t14};
      padding: ${indents.i10} ${indents.i16};
      width: 100%;
      text-align: left;
      border-radius: ${radius.small};

      &:hover,
      &:focus {
        cursor: pointer;
        font-weight: bold;
        background-color: ${colors.greyCCC};
      }
    }
  `};
`;
export const DownIcon = styled.div`
  align-self: center;
  background-image: url(static/icons/Down.svg);
  width: 16px;
  height: 16px;
`;

export const UpIcon = styled(DownIcon)`
  transform: rotate(180deg);
`;
