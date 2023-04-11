import styles from '../../../styles/Main/Student/DetailsForm.module.css';

export default function DetailsForm(props) {
  function show(event) {
    event.preventDefault();
    props.showDetails(true);
  }
  return (
    <div className={styles.detailFormCont}>
      <form>
        <div className={styles.inputform}>
          {/* <label htmlFor="EnrolmentNumber">Enter Enrolment Number</label> */}
          <input
            type="Number"
            name="EnrolmentNumber"
            id="EnrolmentNumber"
            placeholder="EnrolmentNumber"
          />
          <button type="submit" onClick={show}>
            Get Details
          </button>
        </div>
      </form>
    </div>
  );
}
