import '../src/app/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
 return <Component {...pageProps} />;
 return (
   <>
     <Header />
     <Component {...pageProps} />
   </>
 );
}

export default MyApp;