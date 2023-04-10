import { useState, useRef } from 'react';

import styles from '../../styles/Auth/Login.module.css';

export default function Login() {
  const uNameRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    console.log(uNameRef.current.value);
    console.log(passwordRef.current.value);

    //   call login function here
  }

  return (
    <div className={styles.loginCont}>
      <h1>Login</h1>
      <form action="" className={styles.loginForm} onSubmit={onSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="uname"> User Name</label>
          <input
            ref={uNameRef}
            type="text"
            name="uname"
            id="uname"
            placeholder="User Name"
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="pass">Password</label>
          <input
            ref={passwordRef}
            type={showPassword ? 'text' : 'password'}
            name="pass"
            id="pass"
            placeholder="Password"
            required
          />
        </div>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <input
            type="checkbox"
            id="showP"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
          <label htmlFor="showP">Show Password</label>
        </div>
        <button className={styles.button83}>Login</button>
      </form>
    </div>
  );
}
