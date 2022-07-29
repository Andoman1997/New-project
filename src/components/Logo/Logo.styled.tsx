import styled, { css } from 'styled-components';

export const LogoIcon = styled.div`
  ${({ theme: { breakpoints } }) => css`
    background-image: url(/static/logos/logo-large.svg);
    width: 141px;
    height: 36px;

    ${breakpoints.down('xxl')} {
      background-image: url(/static/logos/logo-small.svg);
      width: 96px;
      height: 24px;
    }
  `};
`;
