import { Fragment, use, useEffect, useState, useContext } from 'react';
import styles from '../../../styles/Main/Fees/Pay.module.css';
import { useSession } from 'next-auth/react';
import useHttp from '../../hooks/use-http';
import SchoolContext from '../../../store/school-context';
import { getFeesDetails } from '../../lib/api';
import DetailsForm from '../Student/DetailsForm';

import PayForm from './PayForm';

export default function Pay(props) {
  const [showFee, setShowFee] = useState(false);
  const [year, setYear] = useState(null);
  const schoolCtx = useContext(SchoolContext);
  const session = useSession();

  const {
    sendRequest,
    data: FeeDetails,
    status,
    error,
  } = useHttp(getFeesDetails, false);

  function getStudentDetails(prop) {
    sendRequest({
      schoolId: schoolCtx.schoolid,
      year: prop,
      studentId: props.Student.id.studentId,
      token: session.data.user.access_token,
    });
    setYear(prop);
  }

  return (
    <div className={styles.payCont}>
      <Fragment>
        <div className={styles.details}>
          <h1>Details </h1>
          <h3>Enrollment Number : {props.Student.id.studentId}</h3>
          <h3>
            Name : {props.Student.firstName} {props.Student.lastName}
          </h3>
          <h3>Father Name : {props.Student.fatherName}</h3>
          <h3>Phone : {props.Student.phone}</h3>
        </div>
        <DetailsForm
          formFor='Year'
          showDetails={(props) => {
            getStudentDetails(props);
          }}
        />

        <PayForm fee={FeeDetails} Student={props.Student} year={year} />
      </Fragment>
    </div>
  );
}
