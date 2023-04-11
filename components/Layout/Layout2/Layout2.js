import { Fragment, useState } from 'react';

import SideBar from './SideBar';

import styles from '../../../styles/Layout/Layout2/Layout2.module.css';
import TopBar from './TopBar';

export default function Layout2(props) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <Fragment>
      <TopBar />
      <div className={styles.mainContainer}>
        <div>{!showSideBar && <SideBar />}</div>
        <div className={styles.mainContent}>{props.children}</div>
      </div>
    </Fragment>
  );
}
