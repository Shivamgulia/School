import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import FeeGraph from '../../components/Main/Fees/FeeGraph';

import ClassGraph from '../../components/Main/Fees/ClassGraph';
import ClassChart from '../../components/Main/Fees/ClassChart';
import FeeChart from '../../components/Main/Fees/FeeChart';

export default function FeeDetails() {
  return (
    <Fragment>
      <Head>
        <title>Fees Details</title>
      </Head>
      <Layout2>
        <div
          style={{
            display: 'grid',
            'justify-content': 'center',
            'margin-top': '30px',
          }}
        >
          <FeeChart />
          <ClassChart />
        </div>
      </Layout2>
    </Fragment>
  );
}
