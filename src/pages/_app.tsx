import type { AppProps } from 'next/app';
import { GlobalStyle, theme, ThemeProvider } from '../styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
