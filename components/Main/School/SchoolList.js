import React, { Fragment, useContext } from 'react';
import SchoolItem from './SchoolItem';
import SchoolContext from '../../../store/school-context';
import { useRouter } from 'next/router';

import styles from '../../../styles/Main/School/SchoolList.module.css';

function SchoolList(props) {
  const router = useRouter();
  const schoolCtx = useContext(SchoolContext);
  console.log(props);
  function selectSchool(prop) {
    console.log(prop);
    schoolCtx.login(prop);
    router.push('/');
  }
  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <h3>Select School</h3>
        <div className={styles.itemCont}>
          {props.schools.map((school) => {
            return (
              <Fragment key={school.id}>
                <div
                  onClick={() => {
                    selectSchool(school);
                  }}
                >
                  <SchoolItem school={school} />
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SchoolList;
