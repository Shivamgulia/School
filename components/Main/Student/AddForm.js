import styles from '../../../styles/Main/Student/AddForm.module.css';

export default function AddForm() {
  return (
    <div>
      <form className={styles.form}>
        <h3>Add Student</h3>
        <div className={styles.inputCont}>
          <div className={styles.inputdiv}>
            <label htmlFor="fname" className={styles.formLabel}>
              First Name :
            </label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <label htmlFor="lname" className={styles.formLabel}>
              Last Name :
            </label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <label htmlFor="pname" className={styles.formLabel}>
              Parents Name :
            </label>
            <input
              type="text"
              id="pname"
              placeholder="Parents Number"
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <label htmlFor="fname" className={styles.formLabel}>
              Date Of Birth :
            </label>
            <input
              type="Date"
              id="dob"
              placeholder="dd/mm/yyyy"
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <label htmlFor="fname" className={styles.formLabel}>
              Phone Number :
            </label>
            <input
              type="text"
              id="phone"
              placeholder="XXXXXXXXXX"
              required
              className={styles.formInput}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
