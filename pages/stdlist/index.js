import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import StudentList from '../../components/Main/Student/StudentList';

export default function StdList() {
  return (
    <Fragment>
      <Head>
        <title>Student List</title>
      </Head>
      <Layout2>
        <StudentList />
      </Layout2>
    </Fragment>
  );
}
