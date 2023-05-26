import React from 'react';

import styles from '../../../styles/Main/School/SchoolItem.module.css';

function SchoolItem(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      {/* <h6 className={styles.id}>{props.school.id}</h6> */}
      <h3 className={styles.school}>{props.school.name}</h3>
      <h5 className={styles.address}>{props.school.address}</h5>
    </div>
  );
}

export default SchoolItem;
