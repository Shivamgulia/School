import React from 'react';

import styles from '../../../styles/Main/School/SchoolItem.module.css';

function SchoolItem() {
  return (
    <div className={styles.container}>
      <h6 className={styles.id}>Schoold ID</h6>
      <h3 className={styles.school}>School Name</h3>
      <h5 className={styles.address}>Address</h5>
    </div>
  );
}

export default SchoolItem;
