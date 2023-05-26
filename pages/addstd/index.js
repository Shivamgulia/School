import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import AddForm from '../../components/Main/Student/AddForm';
import { Fragment } from 'react';

export default function AddStd() {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    router.push('/auth');
  }

  return (
    <Fragment>
      <Head>
        <title>Add Student</title>
      </Head>
      <Layout2>
        <AddForm />
      </Layout2>
    </Fragment>
  );
}
