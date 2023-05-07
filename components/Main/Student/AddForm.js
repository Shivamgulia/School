import { useRef, useState } from 'react';

import useHttp from '../../hooks/use-http';
import { addStudent } from '../../lib/api';

import styles from '../../../styles/Main/Student/AddForm.module.css';

export default function AddForm() {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const faNameRef = useRef();
  const mNameRef = useRef();
  const dobRef = useRef();
  const phoneRef = useRef();
  const genderRef = useRef();
  const classRef = useRef();
  const houseRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const pincodeRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const { sendRequest, data, error, status } = useHttp(addStudent, false);

  function submitionHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    const student = {
      firstName: fNameRef.current.value,
      lastName: lNameRef.current.value,
      fatherName: faNameRef.current.value,
      motherName: mNameRef.current.value,
      dob: dobRef.current.value,
      gender: genderRef.current.value,
      phone: phoneRef.current.value,
      admissionDate: new Date(),
      standard: classRef.current.value,
      houseno: houseRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      pincode: pincodeRef.current.value,
    };
    console.log(student);
    sendRequest(student);
    setIsLoading(false);
  }

  if (status == 'pending') {
    return <div>loading</div>;
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
              placeholder="Father's Number"
              required
              ref={faNameRef}
              className={styles.formInput}
            />
            <input
              type="text"
              id="mname"
              placeholder="Mother's Number"
              required
              ref={mNameRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <select
              name="gender"
              id="gender"
              className={styles.formInput}
              ref={genderRef}
            >
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
            <input
              type="Date"
              id="dob"
              placeholder="Date Of Birth"
              required
              ref={dobRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              required
              ref={phoneRef}
              className={styles.formInput}
            />
            <input
              type="number"
              id="class"
              placeholder="Class"
              required
              ref={classRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputAddCont}>
            <h3>Address</h3>
            <div className={styles.inputdiv}>
              <input
                type="text"
                id="houseno"
                placeholder="House Number"
                required
                ref={houseRef}
                className={styles.formInput}
              />
              <input
                type="text"
                id="Street"
                placeholder="Street"
                required
                ref={streetRef}
                className={styles.formInput}
              />
            </div>
            <div className={styles.inputdiv}>
              <input
                type="text"
                id="City"
                placeholder="City"
                required
                ref={cityRef}
                className={styles.formInput}
              />
              <input
                type="text"
                id="State"
                placeholder="State"
                required
                ref={stateRef}
                className={styles.formInput}
              />
            </div>
            <div className={styles.oneinputdiv}>
              <input
                type="number"
                id="pincode"
                placeholder="Pin Code"
                required
                ref={pincodeRef}
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.submitdiv}>
            <button type="submit" className={styles.submitButton}>
              {isLoading ? 'Loading' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
