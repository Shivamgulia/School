import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';

import useHttp from '../../components/hooks/use-http';

import Layout2 from '../../components/Layout/Layout2/Layout2';
import Pay from '../../components/Main/Fees/Pay';
import DetailsForm from '../../components/Main/Student/DetailsForm';
import { GetStudentDetails } from '../../components/lib/api';

export default function PayFees() {
  const [getDets, setGetDets] = useState(false);

  const {
    sendRequest,
    data: StudentDetails,
    status,
    error,
  } = useHttp(GetStudentDetails, false);

  async function getStudentDetails(props) {
    await setGetDets(false);
    if (!(status === 'pending')) await sendRequest(props);
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
          formFor="EnrolmentNumber"
          showDetails={(props) => {
            getStudentDetails(props);
          }}
        />
        {getDets && <Pay Student={StudentDetails} />}
      </Layout2>
    </Fragment>
  );
}
