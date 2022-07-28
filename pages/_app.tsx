import type { AppProps } from 'next/app';
import { Container } from '@/src/components/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

export default MyApp;
