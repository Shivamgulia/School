import { Fragment, useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import SchoolContext from '../../store/school-context';
import useHttp from '../../components/hooks/use-http';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import Pay from '../../components/Main/Fees/Pay';
import DetailsForm from '../../components/Main/Student/DetailsForm';
import { getStudentDetails } from '../../components/lib/api';

export default function PayFees() {
  const [getDets, setGetDets] = useState(false);
  const schoolCtx = useContext(SchoolContext);
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    router.push('/auth');
  }

  const {
    sendRequest,
    data: StudentDetails,
    status,
    error,
  } = useHttp(getStudentDetails, false);

  async function getStudentDetail(prop) {
    console.log(prop);
    await setGetDets(false);
    if (!(status === 'pending'))
      await sendRequest({
        schoolid: schoolCtx.schoolid,
        studentid: prop,
        token: session.data.user.access_token,
      });
    await setGetDets(true);
  }

  useEffect(() => {
    if (status === 'completed') setGetDets(true);
  }, [status]);
  if (error) return error;

  return (
    <Fragment>
      <Head>
        <title>Pay Fees</title>
      </Head>
      <Layout2>
        <DetailsForm
          formFor='EnrolmentNumber'
          showDetails={(props) => {
            getStudentDetail(props);
          }}
        />
        {getDets && <Pay Student={StudentDetails} />}
      </Layout2>
    </Fragment>
  );
}
