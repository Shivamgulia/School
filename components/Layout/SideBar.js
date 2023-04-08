import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';

import SideBarList from '../UI/sidebar/SideBarList';

import styles from '../../styles/Layout/SideBar.module.css';
import { useState } from 'react';

export default function SideBar() {
  const [showSide, setShowSide] = useState(false);
  return (
    <div className={styles.sideContainer}>
      {/* web Side Bar */}
      <div className={styles.sideListweb}>
        <SideBarList />
      </div>

      {/* Mob Side Bar */}
      {/* open close buttons  */}
      {!showSide && (
        <div
          className={styles.sideBarbutton}
          onClick={() => {
            setShowSide(true);
          }}
        >
          <VscChevronRight size={30} />
        </div>
      )}

      {showSide && (
        <div
          className={styles.sideBarbuttonclose}
          onClick={() => {
            setShowSide(!showSide);
          }}
        >
          <VscChevronLeft size={30} />
        </div>
      )}

      {/* SideBar List */}
      {showSide && (
        <div className={styles.sideListmob}>
          <SideBarList />
        </div>
      )}
    </div>
  );
}
