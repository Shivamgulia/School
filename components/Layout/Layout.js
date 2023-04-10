import MainNavigation from './MainNavigation';
import SideBar from './SideBar';

import styles from '../../styles/Layout/Layout.module.css';

export default function Layout(props) {
  return (
    <div className={styles.layoutContainer}>
      {/* <MainNavigation /> */}
      <SideBar className={styles.sideBar} />
      <div className={styles.mainBody}>{props.children}</div>
    </div>
  );
}
