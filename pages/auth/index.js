import Head from 'next/head';
import Login from '../../components/Auth/Login';

export default function Auth() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </div>
  );
}
