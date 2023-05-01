import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { GiSchoolBag } from 'react-icons/gi';
import { FaSchool } from 'react-icons/fa';
import {
  CgProfile,
  CgChevronDoubleDown,
  CgChevronDoubleUp,
  CgLoadbarAlt,
} from 'react-icons/cg';

import styles from '../../../styles/UI/sidebar/SideBarList.module.css';
import { useState } from 'react';

export default function SideBarList() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div className={styles.sideListContainer}>
      <div className={styles.logo}>
        <FaSchool size={40} />
        <h2>School</h2>
      </div>
      <ul>
        <li>
          <Link
            href="/"
            onClick={() => {
              setShow1(!show1);
            }}
          >
            <h3 className={styles.mainsideNav}>
              <div>
                <AiFillHome size={15} /> Home
              </div>
              <div>
                {!show1 && <CgChevronDoubleDown size={15} />}
                {show1 && <CgChevronDoubleUp size={15} />}
              </div>
            </h3>
          </Link>
          {show1 && <ul></ul>}
        </li>
        <li>
          <Link
            href="/stdinfo"
            onClick={() => {
              setShow2(!show2);
            }}
          >
            <h3 className={styles.mainsideNav}>
              <div>
                <GiSchoolBag size={15} /> Students
              </div>
              <div>
                {!show2 && <CgChevronDoubleDown size={15} />}
                {show2 && <CgChevronDoubleUp size={15} />}
              </div>
            </h3>
          </Link>
          {show2 && (
            <ul className={styles.innerLinks}>
              <li>
                <Link href="/stdinfo">
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}
                    Student Details
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/stdlist" className={styles.innerLinks}>
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}Student List
                  </h4>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            href="/stdinfo"
            onClick={() => {
              setShow3(!show3);
            }}
          >
            <h3 className={styles.mainsideNav}>
              <div>
                <CgProfile size={15} /> Management
              </div>
              <div>
                {!show3 && <CgChevronDoubleDown size={15} />}
                {show3 && <CgChevronDoubleUp size={15} />}
              </div>
            </h3>
          </Link>
          {show3 && (
            <ul className={styles.innerLinks}>
              <li>
                <Link href="/feedetails">
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}Fees Details
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/addstd" className={styles.innerLinks}>
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}Add Student
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/payfees" className={styles.innerLinks}>
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}Fee Payment
                  </h4>
                </Link>
              </li>
            </ul>
          )}
        </li>


        <li>
          <Link
            href="/administration"
            onClick={() => {
              setShow4(!show4);
            }}
          >
            <h3 className={styles.mainsideNav}>
              <div>
                <CgProfile size={15} /> Administration
              </div>
              <div>
                {!show4 && <CgChevronDoubleDown size={15} />}
                {show4 && <CgChevronDoubleUp size={15} />}
              </div>
            </h3>
          </Link>
          {show4 && (
            <ul className={styles.innerLinks}>
              <li>
                <Link href="/adminDashboard">
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}Admin Dashboard
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/schoolList" className={styles.innerLinks}>
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}School List
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/addSchool" className={styles.innerLinks}>
                  <h4>
                    <CgLoadbarAlt size={10} /> {` `}Add School
                  </h4>
                </Link>
              </li>
            </ul>
          )}
        </li>


      </ul>
    </div>
  );
}
