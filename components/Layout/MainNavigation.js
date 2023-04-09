import { useState } from 'react';
import Head from 'next/head';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import styles from '../../styles/Layout/MainNavigation.module.css';

export default function MainNavigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className={styles.navContainer}>
      <Head></Head>
      <div className={styles.heading}>School Time</div>
      {/* Browser Nav */}
      <div className={styles.webNav}>
        <ul className={styles.webMenu}>
          <li>
            <button className={styles.button23}>LogOut</button>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className={styles.mobNav}>
        {!showNav && (
          <div
            className={styles.menuButton}
            onClick={() => {
              setShowNav(true);
            }}
          >
            <CgProfile size={30} />
          </div>
        )}

        {showNav && (
          <div className={styles.profileMenu}>
            <div
              className={styles.menuButton}
              onClick={() => {
                setShowNav(false);
              }}
            >
              {/* <AiOutlineClose size={30} /> */}
              <CgProfile size={30} />
            </div>
            <ul className={styles.profileicon}>
              <li>
                <button className={styles.button23}>LogOut</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
