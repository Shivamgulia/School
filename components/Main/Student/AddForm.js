import { useContext, useEffect, useRef, useState } from 'react';

import useHttp from '../../hooks/use-http';
import { addStudent } from '../../lib/api';
import SchoolContext from './../../../store/school-context';
import styles from '../../../styles/Main/Student/AddForm.module.css';
import { useSession } from 'next-auth/react';
import LoadingSpinner from '../../UI/LoadingSpinner';

export default function AddForm({ classes }) {
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
  const emailRef = useRef();
  const fileRef = useRef();
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const session = useSession();
  const schoolCtx = useContext(SchoolContext);

  const [isLoading, setIsLoading] = useState(false);

  const { sendRequest, data, error, status } = useHttp(addStudent, false);

  function submitionHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    const date = dobRef.current.value;
    let dob = date.slice(0, 10).split('-').reverse().join('-');
    let addDate = new Date();
    addDate = addDate.toJSON().slice(0, 10).split('-').reverse().join('-');

    const student = {
      schoolid: Number(schoolCtx.schoolid),
      firstName: fNameRef.current.value,
      lastName: lNameRef.current.value,
      fatherName: faNameRef.current.value,
      motherName: mNameRef.current.value,
      dob: dob,
      gender: genderRef.current.value,
      phone: phoneRef.current.value,
      admissionDate: addDate,
      standard: classRef.current.value,
      houseNo: houseRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      pincode: pincodeRef.current.value,
      email: emailRef.current.value,
    };
    console.log(student);
    sendRequest({ student, token: session.data.user.access_token });
    setIsLoading(false);
  }

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  }, [photo]);

  // if (status == 'pending') {
  //   return (
  //     <div>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }
  return (
    <div>
      <form className={styles.form} onSubmit={submitionHandler}>
        <h3>Add Student</h3>
        <div className={styles.inputCont}>
          <div className={`${styles.inputdiv} ${styles.photofield}`}>
            <input
              type='file'
              id='photo'
              placeholder='Upload Photo'
              hidden
              ref={fileRef}
              onChange={(e) => {
                setPhoto(e.target.files[0]);
                console.log(e.target.files[0]);
                console.log(photo);
              }}
            />
            <button
              onClick={() => {
                fileRef.current.click();
              }}
              type='button'
              className={`${styles.buttonDownload}`}
            >
              Upload Photo
            </button>
            {preview && (
              <div className={styles.formInput}>
                <img
                  src={preview}
                  alt='uploaded photo'
                  width='100px'
                  height='100px'
                />
                <p>{photo.name}</p>
              </div>
            )}
          </div>
          <div className={styles.inputdiv}>
            <input
              type='text'
              id='fname'
              placeholder='First Name'
              required
              ref={fNameRef}
              className={styles.formInput}
            />
            <input
              type='text'
              id='lname'
              placeholder='Last Name'
              required
              ref={lNameRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <input
              type='text'
              id='pname'
              placeholder="Father's Number"
              required
              ref={faNameRef}
              className={styles.formInput}
            />
            <input
              type='text'
              id='mname'
              placeholder="Mother's Number"
              required
              ref={mNameRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <select
              name='gender'
              id='gender'
              className={styles.formInput}
              ref={genderRef}
            >
              <option value='F'>Female</option>
              <option value='M'>Male</option>
            </select>
            <input
              type='Date'
              id='dob'
              placeholder='Date Of Birth'
              required
              ref={dobRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputdiv}>
            <input
              type='text'
              id='phone'
              placeholder='Phone Number'
              required
              ref={phoneRef}
              className={styles.formInput}
            />
            <input
              type='text'
              id='email'
              placeholder='Email'
              ref={emailRef}
              className={styles.formInput}
            />
          </div>
          <div className={styles.oneinputdiv}>
            <select
              type='number'
              id='class'
              placeholder='Class'
              required
              ref={classRef}
              style={{ width: '100px' }}
              className={styles.formInput}
            >
              {classes.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
              {/* <option value='LKG'>LKG</option>
              <option value='UKG'>UKG</option>
              <option value='I'>I</option>
              <option value='II'>II</option>
              <option value='III'>III</option>
              <option value='IV'>IV</option>
              <option value='V'>V</option>
              <option value='VI'>VI</option>
              <option value='VII'>VII</option>
              <option value='VIII'>VIII</option>
              <option value='IX'>IX</option>
              <option value='X'>X</option>
              <option value='XI'>XI</option>
              <option value='XII'>XII</option> */}
            </select>
          </div>
          <div className={styles.inputAddCont}>
            <h3>Address</h3>
            <div className={styles.inputdiv}>
              <input
                type='text'
                id='houseno'
                placeholder='House Number'
                required
                ref={houseRef}
                className={styles.formInput}
              />
              <input
                type='text'
                id='Street'
                placeholder='Street'
                required
                ref={streetRef}
                className={styles.formInput}
              />
            </div>
            <div className={styles.inputdiv}>
              <input
                type='text'
                id='City'
                placeholder='City'
                required
                ref={cityRef}
                className={styles.formInput}
              />
              <input
                type='text'
                id='State'
                placeholder='State'
                required
                ref={stateRef}
                className={styles.formInput}
              />
            </div>
            <div className={styles.oneinputdiv}>
              <input
                type='number'
                id='pincode'
                placeholder='Pin Code'
                required
                ref={pincodeRef}
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.submitdiv}>
            <button type='submit' className={styles.submitButton}>
              {status === 'pending' && (
                <div>
                  <LoadingSpinner />
                </div>
              )}
              {status === 'pending' ? '' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
