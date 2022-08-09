import * as styledComponents from 'styled-components';
import { ThemeInterface } from './theme';
import 'antd/dist/antd.css';

const styled = {
  default: styledComponents.default,
  css: styledComponents.css,
  ThemeProvider: styledComponents.ThemeProvider,
  ThemeContext: styledComponents.ThemeContext,
  createGlobalStyle: styledComponents.createGlobalStyle,
} as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export * from './theme';

export const { css, createGlobalStyle, ThemeProvider, ThemeContext } = styled;

export const GlobalStyle = createGlobalStyle<styledComponents.ThemeProps<ThemeInterface>>`
  ${({ theme }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      overflow: hidden;
      background-color: ${theme.colors.whiteFc};
      font-family: Satoshi-variable, sans-serif;
      font-feature-settings: 'ss03' on;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: unset;
      }
    }

    @font-face {
      font-family: Satoshi-variable;
      src: url(/public/static/fonts/Satoshi-Variable.ttf);
    }
  `}
`;

export default styled.default;
