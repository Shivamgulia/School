import { Fragment, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import Pay from '../../components/Main/Fees/Pay';
import DetailsForm from '../../components/Main/Student/DetailsForm';

export default function PayFees() {
  const [getDets, setGetDets] = useState(false);
  return (
    <Fragment>
      <Head>
        <title>Pay Fees</title>
      </Head>
      <Layout2>
        <DetailsForm
          showDetails={(props) => {
            setGetDets(props);
          }}
        />
        {getDets && <Pay />}
      </Layout2>
    </Fragment>
  );
}
