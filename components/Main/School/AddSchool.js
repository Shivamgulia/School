import React, { Fragment, useState } from 'react';
import { useSession } from 'next-auth/react';
import useHttp from '../../hooks/use-http';
import { addSchool } from '../../lib/api';

import styles from '../../../styles/Main/School/addSchool.module.css';

function AddSchool() {
  const [classList, setClassList] = useState([
    { class: 'Nursery', check: false, index: 0 },
    { class: 'LKG', check: false, index: 1 },
    { class: 'UKG', check: false, index: 2 },
    { class: 'I', check: false, index: 3 },
    { class: 'II', check: false, index: 4 },
    { class: 'III', check: false, index: 5 },
    { class: 'IV', check: false, index: 6 },
    { class: 'V', check: false, index: 7 },
    { class: 'VI', check: false, index: 8 },
    { class: 'VII', check: false, index: 9 },
    { class: 'VIII', check: false, index: 10 },
    { class: 'IX', check: false, index: 11 },
    { class: 'X', check: false, index: 12 },
    { class: 'XI', check: false, index: 13 },
    { class: 'XII', check: false, index: 14 },
  ]);
  const [reqClassList, setReqClassList] = useState([]);
  const session = useSession();

  const { sendRequest, data, error, status } = useHttp(addSchool, false);
  console.log(session);

  //submit function
  function submitionHandler(event) {
    event.preventDefault();

    //   creating class list for req
    let arr = [];
    classList.map((item) => {
      if (item.check) {
        console.log([...reqClassList, item.class]);
        arr.push(item.class);
      }
    });
    setReqClassList(arr);

    console.log(event);
    const requestObject = {
      name: event.target[0].value,
      city: event.target[1].value,
      address: event.target[2].value,
      pincode: event.target[4].value,
      phone: event.target[5].value,
      owner: event.target[3].value,
      email: event.target[6].value,
      classes: reqClassList,
    };
    sendRequest({ requestObject, token: session.data.user.access_token });
    console.log(data);
  }

  return (
    <Fragment>
      <div className={`${styles.mainCont}`}>
        <form action='' className={styles.form} onSubmit={submitionHandler}>
          <div className={styles.inputCont}>
            <div className={styles.inputdiv}>
              <input
                type='text'
                placeholder='School Name'
                className={styles.formInput}
                required
              />
              <input
                type='text'
                placeholder='City'
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.inputdiv}>
              <input
                type='text'
                placeholder='Address'
                className={styles.formInput}
                required
              />
              <input
                type='text'
                placeholder='Owner Name'
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.inputdiv}>
              <input
                type='text'
                placeholder='Pincode'
                className={styles.formInput}
                required
              />
              <input
                type='text'
                placeholder='Phone'
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.oneinputdiv}>
              <input
                type='text'
                placeholder='Email'
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.inputdiv}>
              {classList.map((item) => {
                return (
                  <div
                    key={item.class}
                    onClick={() => {
                      const arr = [...classList];
                      arr[item.index].check = !arr[item.index].check;
                      setClassList(arr);
                      console.log(item.check);
                    }}
                    className={`${styles.classCont} ${
                      item.check ? styles.checked : ''
                    }`}
                  >
                    <h3>{item.class}</h3>
                  </div>
                );
              })}
            </div>
            {status === 'completed' && !error && (
              <h1 style={{ textAlign: 'center' }}> School Added Succesfully</h1>
            )}
            {error && (
              <h1 style={{ textAlign: 'center', color: 'red' }}>
                {' '}
                Request Failed
              </h1>
            )}
            <button className={styles.submitButton} type='submit'>
              {status === 'pending' ? 'Loading' : 'Add School'}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddSchool;
