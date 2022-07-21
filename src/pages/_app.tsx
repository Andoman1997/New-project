import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
