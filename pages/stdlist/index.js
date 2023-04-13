import { Fragment, useState } from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import StudentList from '../../components/Main/Student/StudentList';
import DetailsForm from '../../components/Main/Student/DetailsForm';

export default function StdList() {
  const [showForm, setShowForm] = useState(false);
  function ShowDetails() {
    setShowForm(true);
  }
  return (
    <Fragment>
      <Head>
        <title>Student List</title>
      </Head>
      <Layout2>
        <DetailsForm formFor="Class" showDetails={ShowDetails} />
        {showForm && <StudentList />}
      </Layout2>
    </Fragment>
  );
}
