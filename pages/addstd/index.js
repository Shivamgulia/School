import Head from 'next/head';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import AddForm from '../../components/Main/Student/AddForm';
import { Fragment } from 'react';

export default function AddStd() {
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
