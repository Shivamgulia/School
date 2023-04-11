import React from 'react';
import styles from '../../../styles/Layout/Layout2/TopBar.module.css';
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
          <div>
            {/* <NotificationsActiveIcon className={styles.notification} /> */}
            {/* <span className={styles.topBadge}>5</span> */}
          </div>
          {/* <SettingsIcon className={styles.settings} /> */}
          {/* <LanguageIcon className={styles.language} /> */}
          <img
            // src={ProfileIcon}
            alt="ProfileIcon"
            className={styles.profileIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
