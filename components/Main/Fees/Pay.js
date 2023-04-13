import { useRef } from 'react';

import styles from '../../../styles/Main/Fees/Pay.module.css';

export default function Pay() {
  const payRef = useRef();
  const amountRef = useRef();

  function submitionHandler(event) {
    event.preventDefault();
    console.log(payRef.current.value);
    console.log(amountRef.current.value);
  }
  return (
    <div className={styles.payCont}>
      <div className={styles.details}>
        <h1>Details </h1>
        <h3>Enrollment Number : </h3>
        <h3>Name : </h3>
        <h3>Parents Name :</h3>
        <h3>Phone : </h3>
      </div>
      <div className={styles.formCont}>
        <form action="" className={styles.payForm} onSubmit={submitionHandler}>
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
      </div>
    </div>
  );
}
