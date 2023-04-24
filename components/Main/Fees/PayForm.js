import { useState, useRef } from 'react';
import styles from '../../../styles/Main/Fees/Pay.module.css';
import useHttp from '../../hooks/use-http';
import { updateFees } from '../../lib/api';

export default function PayForm(props) {
  const [incomplete, setIncomplete] = useState(false);
  const payRef = useRef();
  const amountRef = useRef();
  const quaterRef = useRef();

  const {
    sendRequest: updateStudentFees,
    data,
    status,
    error,
  } = useHttp(updateFees, false);

  function submitionHandler(event) {
    event.preventDefault();
    if (payRef.current.value === 'select' || quaterRef.current.value === '0') {
      setIncomplete(true);
    } else {
      const fees = {
        fees: {
          schoolId: props.student.schoolId,
          studentId: props.student.studentId,
          year: 2020,
          quater1payment: payRef.current.value,
          quater1amount: amountRef.current.value,
          quater2payment: payRef.current.value,
          quater2amount: amountRef.current.value,
          quater3payment: payRef.current.value,
          quater3amount: amountRef.current.value,
          quater4payment: payRef.current.value,
          quater4amount: amountRef.current.value,
        },
        quater: quaterRef.current.value,
      };
      console.log(fees);
      updateStudentFees(fees);
    }
  }

  return (
    <div className={styles.formCont}>
      <form action="" className={styles.payForm} onSubmit={submitionHandler}>
        <div className={styles.formselect}>
          <label htmlFor="quater"> Quater</label>
          <select name="quater" id="quater" ref={quaterRef} required>
            <option value="0">-- select an option --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className={styles.formselect}>
          <label htmlFor="payment"> Payment</label>
          <select name="payment" id="payment" ref={payRef} required="required">
            <option value="select">-- select an option --</option>
            <option value="Complete">Full Payment</option>
            <option value="Partial">Partial Payment</option>
          </select>
        </div>
        <div className={styles.forminput}>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" ref={amountRef} required />
        </div>
        {incomplete && 'Please fill the form correctly'}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
