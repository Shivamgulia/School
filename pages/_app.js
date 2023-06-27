import { SessionProvider } from 'next-auth/react';
import { SchoolContextProvider } from '../store/school-context';

import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log(session);
  return (
    <SessionProvider session={pageProps.session}>
      <SchoolContextProvider>
        <Component {...pageProps.pageProps} />
      </SchoolContextProvider>
    </SessionProvider>
  );
}
