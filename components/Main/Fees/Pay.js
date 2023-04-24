import { Fragment, useEffect } from 'react';
import styles from '../../../styles/Main/Fees/Pay.module.css';
import useHttp from '../../hooks/use-http';
import { getStudentDetails } from '../../lib/api';
import PayForm from './PayForm';

export default function Pay(props) {
  console.log(props);

  const {
    sendRequest,
    data: studentDetails,
    status,
    error,
  } = useHttp(getStudentDetails);

  useEffect(() => {
    sendRequest(props.Fees.studentId);
  }, [sendRequest, props.Fees.studentId]);

  return (
    <div className={styles.payCont}>
      {status === 'completed' && (
        <Fragment>
          <div className={styles.details}>
            <h1>Details </h1>
            <h3>Enrollment Number : {props.Fees.studentId}</h3>
            <h3>
              Name : {studentDetails.firstName} {studentDetails.lastName}
            </h3>
            <h3>Parents Name : {studentDetails.fatherName}</h3>
            <h3>Phone : {studentDetails.phone}</h3>
          </div>
          <PayForm student={studentDetails} />
        </Fragment>
      )}
      {/* <div className={styles.formCont}>
        <form action="" className={styles.payForm} onSubmit={submitionHandler}>
          <div className={styles.formselect}>
            <label htmlFor="quater"> Payment</label>
            <select name="quater" id="quater" ref={quaterRef}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className={styles.formselect}>
            <label htmlFor="payment"> Payment</label>
            <select name="payment" id="payment" ref={payRef}>
              <option value="Complete">Full Payment</option>
              <option value="Partial">Partial Payment</option>
            </select>
          </div>
          <div className={styles.forminput}>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" ref={amountRef} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </div>
  );
}
