import { useRef } from 'react';
import styles from '../../../styles/Main/Student/DetailsForm.module.css';

export default function DetailsForm(props) {
  const enrollmentRef = useRef();

  function show(event) {
    event.preventDefault();
    props.showDetails(enrollmentRef.current.value);
  }
  return (
    <div className={styles.detailFormCont}>
      <form onSubmit={show}>
        <div className={styles.inputform}>
          {/* <label htmlFor="EnrolmentNumber">Enter Enrolment Number</label> */}
          <input
            type="Number"
            name="EnrolmentNumber"
            id="EnrolmentNumber"
            placeholder={props.formFor}
            ref={enrollmentRef}
            required
          />
          <button
            type="submit"
            className={styles.submitbutton}
            // onClick={show}
          >
            <span>Get Details</span>
          </button>
        </div>
      </form>
    </div>
  );
}
