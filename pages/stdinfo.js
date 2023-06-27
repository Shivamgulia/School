import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import SchoolContext from '../store/school-context';
import DetailsForm from '../components/Main/Student/DetailsForm';
import Layout2 from '../components/Layout/Layout2/Layout2';
import StudentList from '../components/Main/Student/StudentList';
import useHttp from '../components/hooks/use-http';
import { getStudentDetails } from '../components/lib/api';

export default function StdInfo() {
  const [students, setStudents] = useState([]);
  const [updateList, setUpdateList] = useState(false);

  const schoolCtx = useContext(SchoolContext);
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    router.push('/auth');
  }

  const {
    sendRequest,
    data: studentDetails,
    status,
    error,
  } = useHttp(getStudentDetails, true);
  console.log(schoolCtx.schoolid);

  function ShowDetails(prop) {
    sendRequest({
      schoolid: schoolCtx.schoolid,
      studentid: prop,
      token: session.data.user.access_token,
    });
    setUpdateList(true);
    console.log('sent');
  }

  useEffect(() => {
    if (status == 'completed') {
      setStudents([studentDetails, ...students]);
      setUpdateList(true);
    }
  }, [studentDetails, status, updateList]);

  return (
    <div>
      <Head>
        <title>Student Details</title>
      </Head>
      <Layout2>
        <DetailsForm formFor='EnrolmentNumber' showDetails={ShowDetails} />
        {status == 'completed' && !error && (
          <div>
            <StudentList Students={students}></StudentList>
          </div>
        )}
      </Layout2>
    </div>
  );
}
