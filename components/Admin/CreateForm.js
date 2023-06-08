import React, { Fragment } from 'react';
import { BsXLg } from 'react-icons/bs';
import Modal from '../Layout/Modal';

import styles from '../../styles/Admin/CreateForm.module.css';

function CreateForm(props) {
  console.log(props);
  function submitionHandler(event) {
    event.preventDefault();
    console.log(event);
    if (props.school) {
      const reqObj = {
        firstname: event.target[0].value,
        lastname: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value,
        schoolid: props.school.id,
      };
      console.log(reqObj);
    } else {
      console.log('school not selected');
    }
  }
  return (
    <Fragment>
      {/* <div className={`${styles.model}`}>
        <h1
          style={{
            color: 'white',
            position: 'fixed',
            right: '1vw',
            top: '7vh',
          }}
          onClick={props.reset}
        >
          <BsXLg />
        </h1> */}
      <Modal onClick={props.reset}>
        <div className={`${styles.formCont}`}>
          <h1 className={`${styles.formHead}`}>Add Admin</h1>
          <form onSubmit={submitionHandler} className={`${styles.form}`}>
            <div className={`${styles.coolinput}`}>
              <label htmlFor='fname' className={`${styles.text}`}>
                First Name
              </label>
              <input
                type='text'
                name='fname'
                id='fname'
                className={`${styles.input}`}
                required
              />
            </div>
            <div className={`${styles.coolinput}`}>
              <label htmlFor='lname' className={`${styles.text}`}>
                Last Name
              </label>
              <input
                type='text'
                name='lname'
                id='lname'
                className={`${styles.input}`}
                required
              />
            </div>
            <div className={`${styles.coolinput}`}>
              <label htmlFor='email' className={`${styles.text}`}>
                Email
              </label>
              <input
                type='text'
                name='email'
                id='email'
                className={`${styles.input}`}
                required
              />
            </div>
            <div className={`${styles.coolinput}`}>
              <label htmlFor='password' className={`${styles.text}`}>
                Password
              </label>
              <input
                type='text'
                name='password'
                id='password'
                className={`${styles.input}`}
                required
              />
            </div>
            <button type='submit' className={`${styles.button}`}>
              Create Admin
            </button>
          </form>
        </div>
        {/* </div> */}
      </Modal>
    </Fragment>
  );
}

export default CreateForm;
