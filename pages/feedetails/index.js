import { Fragment, useEffect, useState, useRef, useContext } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import SchoolContext from '../../store/school-context';
import { useRouter } from 'next/router';
import Layout2 from '../../components/Layout/Layout2/Layout2';

import ClassChart from '../../components/Main/Fees/ClassChart';
import FeeChart from '../../components/Main/Fees/FeeChart';

import useHttp from '../../components/hooks/use-http';
import { graphList } from '../../components/lib/api';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

import styles from '../../styles/feedetails.module.css';
//TODO use api request to show graph, sql script email in student and school , student ma photo, email

export default function FeeDetails() {
  const [graph, setGraph] = useState(true);
  const d = new Date();

  // to check if loged in
  const schoolCtx = useContext(SchoolContext);
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    router.push('/auth');
  }

  //
  console.log(schoolCtx.school);

  const [year, setYear] = useState(d.getFullYear());
  const [month, setMonth] = useState(d.getMonth());
  const {
    sendRequest,
    data: graphData,
    error,
    status,
  } = useHttp(graphList, false);

  useEffect(() => {
    if (session.status === 'authenticated')
      sendRequest({
        month: month,
        year: year,
        schoolid: schoolCtx.schoolid,
        token: session.data.user.access_token,
      });
    console.log(graphData);
  }, [session.status]);

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
