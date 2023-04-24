import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';

import useHttp from '../../components/hooks/use-http';
import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import Pay from '../../components/Main/Fees/Pay';
import DetailsForm from '../../components/Main/Student/DetailsForm';
import { getFeesDetails } from '../../components/lib/api';

export default function PayFees() {
  const [getDets, setGetDets] = useState(false);
  const {
    sendRequest: getFees,
    data: FeesDetails,
    status,
    error,
  } = useHttp(getFeesDetails, false);

  function getStudentFeesDetails(props) {
    getFees({ schoolId: 1, year: 2020, studentId: props });
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
            getStudentFeesDetails(props);
          }}
        />
        {getDets && <Pay Fees={FeesDetails} />}
      </Layout2>
    </Fragment>
  );
}
