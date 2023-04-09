import styles from '../../../styles/Main/Fees/Pay.module.css';

export default function Pay() {
  return (
    <div className={styles.payCont}>
      <div>
        <h1>Details </h1>
        <h3>Enrollment Number : </h3>
        <h3>Name : </h3>
        <h3>Parents Name :</h3>
        <h3>Phone : </h3>
      </div>
      <div className={styles.formCont}>
        <form action="" className={styles.payForm}>
          <div className={styles.formselect}>
            <label htmlFor="payment"> Payment</label>
            <select name="payment" id="payment">
              <option value="Complete">Full Payment</option>
              <option value="Partial">Partial Payment</option>
            </select>
          </div>
          <div className={styles.forminput}>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
