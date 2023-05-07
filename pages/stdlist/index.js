import { Fragment, useState } from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import StudentList from '../../components/Main/Student/StudentList';
import DetailsForm from '../../components/Main/Student/DetailsForm';
import useHttp from '../../components/hooks/use-http';
import { getSchoolStudent } from '../../components/lib/api';

export default function StdList() {
  const [showForm, setShowForm] = useState(false);

  const {
    sendRequest,
    data: loadedStudents,
    error,
    status,
  } = useHttp(getSchoolStudent, false);

  function ShowDetails(props) {
    sendRequest(props);
  }

  return (
    <Fragment>
      <Head>
        <title>Student List</title>
      </Head>
      <Layout2>
        <DetailsForm formFor="Class" showDetails={ShowDetails} />
        {status == 'completed' && <StudentList Students={loadedStudents} />}
      </Layout2>
    </Fragment>
  );
}
