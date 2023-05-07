import { Fragment, use, useEffect, useState } from 'react';
import styles from '../../../styles/Main/Fees/Pay.module.css';
import useHttp from '../../hooks/use-http';
import { getFeesDetails } from '../../lib/api';
import DetailsForm from '../Student/DetailsForm';

import PayForm from './PayForm';

export default function Pay(props) {
  const [showFee, setShowFee] = useState(false);
  const [year, setYear] = useState(null);

  const {
    sendRequest,
    data: FeeDetails,
    status,
    error,
  } = useHttp(getFeesDetails, false);

  // const combinedClasses = `${}`

  function getStudentDetails(prop) {
    sendRequest({
      schoolId: 1,
      year: prop,
      studentId: props.Student.id.studentId,
    });
    setYear(prop);
  }


  return (
    <div className={styles.payCont}>
      <Fragment>
        <div className={styles.details}>
          <h3 className={styles.detailsHead}>Student Details</h3>
          <div className={styles.detailsBody}>
            <div className={styles.detailsBodyCol1}>
                <div className={styles.detailsCol1Row}>
                  <h4>Enrollment Number</h4>
                  <span>:</span>
                </div>
                <div className={styles.detailsCol1Row}>
                  <h4>Name </h4>
                  <span>:</span>
                </div>
                <div className={styles.detailsCol1Row}>
                  <h4>Father Name</h4>
                  <span>:</span>
                </div>
                <div className={styles.detailsCol1Row}>
                  <h4>Phone No.</h4>
                  <span>:</span>
                </div>
            </div>
            <div className={styles.detailsBodyCol2}>
                <div className={styles.detailsCol2Row}>
                  <h4>{props.Student.id.studentId}</h4>
                </div>
                <div className={styles.detailsCol2Row}>
                  <h4>{props.Student.firstName} {props.Student.lastName}</h4>
                </div>
                <div className={styles.detailsCol2Row}>
                  <h4>{props.Student.fatherName}</h4>
                </div>
                <div className={styles.detailsCol2Row}>
                  <h4>{props.Student.phone}</h4>
                </div>
            </div>
          </div>
        </div>

        <DetailsForm
          formFor="Year"
          showDetails={(props) => {
            getStudentDetails(props);
          }}
        />

        <PayForm fee={FeeDetails} Student={props.Student} year={year} />
      </Fragment>
    </div>
  );
}
