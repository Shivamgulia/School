import { Fragment, useState } from 'react';
import Head from 'next/head';

import Layout2 from '../../components/Layout/Layout2/Layout2';
import SchoolList from '../../components/Main/School/SchoolList';

export default function SchoolList() {
  return (
    <Fragment>
      <Head>
        <title>Schools List</title>
      </Head>
      <Layout2>
        <SchoolList />
      </Layout2>
    </Fragment>
  );
}
