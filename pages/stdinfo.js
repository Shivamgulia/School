import { useState } from 'react';
import Head from 'next/Head';

import DetailsForm from '../components/Main/Student/DetailsForm';
import Layout from '../components/Layout/Layout';
import StudentItem from '../components/Main/Student/StudentItem';
import useHttp from '../components/hooks/use-http';
import { getStudentDetails } from '../components/lib/api';

export default function StdInfo() {
  const [showDets, setShowDets] = useState(false);

  const {
    sendRequest,
    data: studentDetails,
    status,
    error,
  } = useHttp(getStudentDetails, true);

  function ShowDetails(props) {
    setShowDets(props);
  }

  // const date1 = new Date();

  const student = {
    enrolmentNumber: 101,
    firstName: 'Shivam',
    lastName: 'Gulia',
    parentName: 'Jitendra Kumar',
    // DOB: date1,
    phone: 8279373573,
  };
  return (
    <div>
      <Head>
        <title>Student Details</title>
      </Head>
      <Layout>
        <DetailsForm showDetails={ShowDetails} />
        {showDets && (
          <div>
            <StudentItem Student={student}></StudentItem>
          </div>
        )}
      </Layout>
    </div>
  );
}
