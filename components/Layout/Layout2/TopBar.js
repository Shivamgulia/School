import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '../../../styles/Layout/Layout2/TopBar.module.css';

import { CgBoy, CgLogOut } from 'react-icons/cg';
import { signOut } from 'next-auth/react';
import SchoolContext from '../../../store/school-context';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import SettingsIcon from '@material-ui/icons/Settings';
// import LanguageIcon from '@material-ui/icons/Language';
// import ProfileIcon from './profileIcon.jpg';
const TopBar = () => {
  const schoolCtx = useContext(SchoolContext);
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
          <button
            className={styles.profileIcon}
            onClick={() => {
              signOut();
              schoolCtx.logout();
            }}
          >
            <CgLogOut size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
