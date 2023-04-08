import { AiFillHome } from 'react-icons/ai';
import { GiSchoolBag } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

import styles from '../../../styles/UI/sidebar/SideBarList.module.css';

export default function SideBarList() {
  return (
    <div className={styles.sideListContainer}>
      <ul>
        <li>
          <a href="/">
            <h3 className={styles.mainsideNav}>
              <AiFillHome size={15} /> Home
            </h3>
          </a>
        </li>
        <li>
          <h3 className={styles.mainsideNav}>
            <CgProfile size={15} /> Profile
          </h3>
          <ul>
            <a href="/">
              <li>
                <h4> Logout</h4>
              </li>
            </a>
          </ul>
        </li>
        <li>
          <h3 className={styles.mainsideNav}>
            <GiSchoolBag size={15} /> Students
          </h3>
          <ul className={styles.innerLinks}>
            <a href="/stdinfo">
              <li>
                <h4>Student Details</h4>
              </li>
            </a>
            <a href="/stdlist">
              <li>
                <h4>Student List</h4>
              </li>
            </a>
          </ul>
        </li>
      </ul>
    </div>
  );
}
