import { useState, useRef, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Auth/Login.module.css';
import { signIn } from 'next-auth/react';

export default function Login() {
  const uNameRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/');
      // router.push('/schoolselect');
    }
  }, [session]);

  async function onSubmit(event) {
    event.preventDefault();
    //   call login function here

    console.log(uNameRef.current.value);
    console.log(passwordRef.current.value);
    const res = await signIn('credentials', {
      email: uNameRef.current.value,
      password: passwordRef.current.value,
      redirect: false,
    });
    console.log(res);
    if (res.error) setError(true);
    else setError(false);
  }

  return (
    <div className={styles.loginCont}>
      <h1>Login</h1>
      <form action='' className={styles.loginForm} onSubmit={onSubmit}>
        <div className={styles.formInput}>
          <label htmlFor='uname'> User Name</label>
          <input
            ref={uNameRef}
            type='text'
            name='uname'
            id='uname'
            placeholder='User Name'
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor='pass'>Password</label>
          <input
            ref={passwordRef}
            type={showPassword ? 'text' : 'password'}
            name='pass'
            id='pass'
            placeholder='Password'
            required
          />
        </div>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <input
            type='checkbox'
            id='showP'
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
          <label htmlFor='showP'>Show Password</label>
        </div>
        <div className={styles.error}>
          {error && <h5>Invalid Credentials</h5>}
        </div>
        <button className={styles.button83}>Login</button>
      </form>
    </div>
  );
}
