import { useEffect, useState } from 'react';
import Head from 'next/head';

import DetailsForm from '../components/Main/Student/DetailsForm';
import Layout from '../components/Layout/Layout';
import Layout2 from '../components/Layout/Layout2/Layout2';
import StudentList from '../components/Main/Student/StudentList';
import useHttp from '../components/hooks/use-http';
import { getStudentDetails } from '../components/lib/api';

export default function StdInfo() {
  const [students, setStudents] = useState([]);

  const {
    sendRequest,
    data: studentDetails,
    status,
    error,
  } = useHttp(getStudentDetails, true);

  function ShowDetails(props) {
    sendRequest(props);
  }

  useEffect(() => {
    if (status == 'completed') setStudents([studentDetails, ...students]);
  }, [studentDetails, status, students]);

  return (
    <div>
      <Head>
        <title>Student Details</title>
      </Head>
      <Layout2>
        <DetailsForm formFor="EnrolmentNumber" showDetails={ShowDetails} />
        {status == 'completed' && !error && (
          <div>
            <StudentList Students={students}></StudentList>
          </div>
        )}
      </Layout2>
    </div>
  );
}
