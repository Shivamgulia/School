import { Fragment, useState } from 'react';
import { IoGrid, IoAppsSharp, IoBackspace } from 'react-icons/io5';

import SideBar from './SideBar';

import styles from '../../../styles/Layout/Layout2/Layout2.module.css';
import TopBar from './TopBar';

export default function Layout2(props) {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <Fragment>
      <TopBar />
      <div className={styles.mainContainer}>
        <div>
          {!showSideBar && (
            <IoAppsSharp
              size={30}
              onClick={() => {
                setShowSideBar(true);
              }}
              className={styles.openIcon}
            />
          )}
          {showSideBar && (
            <Fragment>
              <IoBackspace
                size={30}
                onClick={() => {
                  setShowSideBar(false);
                }}
                className={styles.closeIcon}
              />
              <SideBar className={styles.sidebar} />
            </Fragment>
          )}
        </div>
        <div className={styles.mainContent}>{props.children}</div>
      </div>
    </Fragment>
  );
}
