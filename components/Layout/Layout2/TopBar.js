import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Layout/Layout2/TopBar.module.css';

import { CgBoy, CgLogOut } from 'react-icons/cg';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import SettingsIcon from '@material-ui/icons/Settings';
// import LanguageIcon from '@material-ui/icons/Language';
// import ProfileIcon from './profileIcon.jpg';
const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarContainer}>
        <div className={styles.topLeft}>
          <h3 className={styles.title}>School</h3>
        </div>
        <div className={styles.topRight}>
          {/* <div> */}
          {/* <NotificationsActiveIcon className={styles.notification} /> */}
          {/* <span className={styles.topBadge}>5</span> */}
          {/* </div> */}
          {/* <SettingsIcon className={styles.settings} /> */}
          {/* <LanguageIcon className={styles.language} /> */}
          <Link className={styles.profileIcon} href="/auth">
            <CgLogOut size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
