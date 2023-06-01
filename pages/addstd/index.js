import Head from 'next/head';
import { Fragment, useEffect, useContext } from 'react';
import SchoolContext from '../../store/school-context';
import { useSession } from 'next-auth/react';
import useHttp from '../../components/hooks/use-http';
import { getClassList } from '../../components/lib/api';
import { useRouter } from 'next/router';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import AddForm from '../../components/Main/Student/AddForm';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

export default function AddStd() {
  const session = useSession();
  const router = useRouter();
  const schoolCtx = useContext(SchoolContext);

  console.log(schoolCtx);

  const { sendRequest, data, status, error } = useHttp(getClassList, true);

  useEffect(() => {
    if (session.status === 'authenticated' && schoolCtx.schoolid) {
      sendRequest({
        schoolid: schoolCtx.schoolid,
        token: session.data.user.access_token,
      });
    }
    console.log(data);
  }, [session, schoolCtx.schoolid]);

  if (session.status === 'unauthenticated') {
    router.push('/auth');
  }

  return (
    <Fragment>
      <Head>
        <title>Add Student</title>
      </Head>
      <Layout2>
        {status === 'completed' && data && <AddForm classes={data} />}
        {status === 'pending' && <LoadingSpinner />}
        {error && <h1>Error</h1>}
      </Layout2>
    </Fragment>
  );
}
