import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
