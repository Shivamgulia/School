import React from 'react';

import SchoolItem from './SchoolItem';

import styles from '../../../styles/Main/School/SchoolList.module.css';

function SchoolList() {
  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <h3>Select School</h3>
        <div className={styles.itemCont}>
          <SchoolItem />
          <SchoolItem />
          <SchoolItem />
        </div>
      </div>
    </div>
  );
}

export default SchoolList;
