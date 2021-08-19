import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Header } from '../components/Header';

import Global from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
