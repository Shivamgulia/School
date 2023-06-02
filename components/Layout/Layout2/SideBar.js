import React, { Fragment, useState } from 'react';
import styles from './../../../styles/Layout/Layout2/SideBar.module.css';
import Link from 'next/link';

const sideLinks = [
  {
    head: 'Management',
    innerLinks: [
      {
        name: 'Fee Details',
        to: '/feedetails',
        openLinks: false,
        deepLinks: [
          { name: 'Fee Detail', to: '/feedetails' },
          { name: 'Fee Details', to: '/feedetails' },
        ],
      },
      { name: 'Add Student', to: '/addstd' },
      { name: 'Pay Fees', to: '/payfees' },
    ],
  },
  {
    head: 'Principle',
    innerLinks: [
      { name: 'Student Details', to: '/stdinfo' },
      { name: 'Student List', to: '/stdlist' },
    ],
  },
  { head: 'Profile', innerLinks: [{ name: 'logout', to: '/auth' }] },
];

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarContainer}>
        <div className={styles.SideBarDashboard}>
          <h4 className={styles.sideBarListTitle}>Admin</h4>
          <ul className={styles.sideBarList}>
            <Link href='/addsch' className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                Add School
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.SideBarDashboard}>
          <h4 className={styles.sideBarListTitle}>Management</h4>
          <ul className={styles.sideBarList}>
            <div className={styles.wrapper}>
              <Link href='' className={styles.link}>
                <li className={`${styles.sideBarListItem} ${styles.active}`}>
                  Dashboard
                </li>
              </Link>
              <div className={styles.deepDiv}>
                <ul>
                  <Link href='/feedetails' className={styles.link}>
                    <li
                      className={`${styles.sideBarListItem} ${styles.active}`}
                    >
                      Fee Details
                    </li>
                  </Link>
                  <Link href='/feedetails' className={styles.link}>
                    <li
                      className={`${styles.sideBarListItem} ${styles.active}`}
                    >
                      School Statics
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <Link href='/addstd' className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                Add Student
              </li>
            </Link>
            <Link href='/payfees' className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                PayFees
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.SideBarDashboard}>
          <h4 className={styles.sideBarListTitle}>Principle</h4>
          <ul className={styles.sideBarList}>
            <Link href='/stdinfo' className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                Student Details
              </li>
            </Link>
            <Link href='/stdlist' className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                Student List
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.SideBarDashboard}>
          <h4 className={styles.sideBarListTitle}>Profile</h4>
          <ul className={styles.sideBarList}>
            <Link href='/auth' className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                Log Out
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
