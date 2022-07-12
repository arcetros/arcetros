import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="font-primary">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
