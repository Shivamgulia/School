import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import FeeGraph from '../../components/Main/Fees/FeeGraph';
import FeeList from '../../components/Main/Fees/FeeList';

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
          <FeeGraph />
          {/* <FeeList /> */}
        </div>
      </Layout2>
    </Fragment>
  );
}
