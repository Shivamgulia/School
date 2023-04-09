import styles from '../../styles/Auth/Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginCont}>
      <h1>Login</h1>
      <form action="" className={styles.loginForm}>
        <div className={styles.formInput}>
          <label htmlFor="uname"> User Name</label>
          <input type="text" name="uname" id="uname" placeholder="User Name" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" id="pass" placeholder="Password" />
        </div>
        <button className={styles.button83}>Login</button>
      </form>
    </div>
  );
}
