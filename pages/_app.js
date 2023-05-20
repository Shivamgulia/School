import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log(session);
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps.pageProps} />
    </SessionProvider>
  );
}
