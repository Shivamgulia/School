import { Fragment } from 'react';
import SideBar from './SideBar';

import styles from '../../styles/Layout/Layout.module.css';

export default function Layout(props) {
  return (
    <div className={styles.layoutContainer}>
      <SideBar />
      <div className={styles.mainContent}>{props.children}</div>
    </div>
  );
}
