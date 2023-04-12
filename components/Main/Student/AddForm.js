import { useRef } from 'react';

import styles from '../../../styles/Main/Student/AddForm.module.css';

export default function AddForm() {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const pNameRef = useRef();
  const dobRef = useRef();
  const phoneRef = useRef();

  function submitionHandler(event) {
    event.preventDefault();
    console.log(fNameRef.current.value);
    console.log(lNameRef.current.value);
    console.log(pNameRef.current.value);
    console.log(dobRef.current.value);
    console.log(phoneRef.current.value);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={submitionHandler}>
        <h3>Add Student</h3>
        <div className={styles.inputCont}>
          <div className={styles.inputdiv}>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              required
              ref={fNameRef}
              className={styles.formInput}
            />
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              required
              ref={lNameRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <input
              type="text"
              id="pname"
              placeholder="Parents Number"
              required
              ref={pNameRef}
              className={styles.formInput}
            />
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              required
              ref={phoneRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <select name="gender" id="gender" className={styles.formInput}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <input
              type="Date"
              id="dob"
              placeholder="dd/mm/yyyy"
              required
              ref={dobRef}
              className={styles.formInput}
            />
          </div>

          <div className={styles.submitdiv}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
