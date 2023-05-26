import { Fragment, useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import FeeGraph from '../../components/Main/Fees/FeeGraph';
import ClassGraph from '../../components/Main/Fees/ClassGraph';
import useHttp from '../../components/hooks/use-http';
import { graphList } from '../../components/lib/api';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

import styles from '../../styles/feedetails.module.css';
//TODO use api request to show graph, sql script email in student and school , student ma photo, email

export default function FeeDetails() {
  const [graph, setGraph] = useState(true);
  const d = new Date();

  // to check if loged in
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    router.push('/auth');
  }

  //

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
        token: session.data.user.access_token,
      });
    console.log(graphData);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Fees Details</title>
      </Head>
      <Layout2>
        {/* toggle button */}
        <div className={styles.togglebutton}>
          <label className={styles.switch}>
            <input
              className={styles.checkInput}
              type='checkbox'
              defaultChecked={graph}
              onClick={() => {
                setGraph(!graph);
              }}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.form}>
          {/* month and year form */}
          <form
            className={styles.formdiv}
            onSubmit={(event) => {
              event.preventDefault();
              sendRequest({
                month: month,
                year: year,
                token: session.data.user.access_token,
              });
            }}
          >
            <div className={styles.forminputs}>
              <div>
                <div className={styles.group}>
                  <input
                    type='number'
                    name='year'
                    id='year'
                    value={year}
                    onChange={(event) => {
                      setYear(event.target.value);
                    }}
                    required
                    className={styles.input}
                  />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.label}>Year</label>
                </div>
              </div>

              <div className={styles.selectdiv}>
                {/* <label htmlFor='month'>Month</label> */}
                <select
                  type='number'
                  name='month'
                  id='month'
                  value={month}
                  onChange={(event) => {
                    setMonth(event.target.value);
                  }}
                  className={styles.select}
                  required
                >
                  <option value='' disabled='disabled'>
                    Month
                  </option>
                  <option value='1'>Jan</option>
                  <option value='2'>Feb</option>
                  <option value='3'>Mar</option>
                  <option value='4'>Apr</option>
                  <option value='5'>May</option>
                  <option value='6'>Jun</option>
                  <option value='7'>Jul</option>
                  <option value='8'>Aug</option>
                  <option value='9'>Sep</option>
                  <option value='10'>Oct</option>
                  <option value='11'>Nov</option>
                  <option value='12'>Dec</option>
                </select>
              </div>
            </div>
            <div>
              <button type='submit' className={styles.subbutton}>
                <span>MODIFY DATA</span>
              </button>
            </div>
          </form>

          {/* loading state */}
          {status === 'pending' && <LoadingSpinner />}

          {error && <h1>{error}</h1>}

          {/* graphs */}
          {status === 'completed' && graphData && (
            <div>
              {graph && (
                <FeeGraph
                  pen={graphData.totalStudentPendingFee}
                  sub={graphData.totalStudentSubmittedFee}
                />
              )}
              {status === 'completed' && graphData && !graph && (
                <ClassGraph data={graphData.classWiseList} />
              )}
            </div>
          )}
        </div>
      </Layout2>
    </Fragment>
  );
}
