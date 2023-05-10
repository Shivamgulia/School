import { Fragment, useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import FeeGraph from '../../components/Main/Fees/FeeGraph';
import ClassGraph from '../../components/Main/Fees/ClassGraph';
import useHttp from '../../components/hooks/use-http';
import { graphList } from '../../components/lib/api';

import styles from '../../styles/feedetails.module.css';
//TODO use api request to show graph, sql script email in student and school , student ma photo, email

export default function FeeDetails() {
  const [graph, setGraph] = useState(false);
  const d = new Date();
  let month = d.getMonth();
  let year = d.getFullYear();
  const yearRef = useRef();
  const monthRef = useRef();
  const {
    sendRequest,
    data: graphData,
    error,
    status,
  } = useHttp(graphList, false);

  useEffect(() => {
    sendRequest({ month: month, year: year });
  }, [year, month]);

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
              onClick={() => {
                setGraph(!graph);
              }}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div
          style={{
            display: 'grid',
            'justify-content': 'center',
            'margin-top': '30px',
          }}
        >
          {/* month and year form */}
          <form
            className={styles.formdiv}
            onSubmit={(event) => {
              event.preventDefault();
              sendRequest({
                month: monthRef.current.value,
                year: yearRef.current.value,
              });
            }}
          >
            <label htmlFor='month'></label>
            <select
              type='number'
              name='month'
              id='month'
              ref={monthRef}
              required
            >
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
            <label htmlFor='year'></label>
            <input type='number' name='year' id='year' ref={yearRef} required />
            <button type='submit'>Modify Data</button>
          </form>

          {/* loading state */}
          {status === 'pending' && (
            <div>
              <h1>Loading....</h1>
            </div>
          )}

          {/* graphs */}
          {status === 'completed' && (
            <div>
              {graph && (
                <FeeGraph
                  pen={graphData.totalStudentPendingFee}
                  sub={graphData.totalStudentSubmittedFee}
                />
              )}
              {!graph && <ClassGraph data={graphData.classWiseList} />}
            </div>
          )}
        </div>
      </Layout2>
    </Fragment>
  );
}
