import { Fragment } from 'react';
import Link from 'next/link';
import styles from '../../styles/Layout/SideBar.module.css';

const sideLinks = [
  {
    head: 'management',
    innerLinks: ['Fee Details', 'Add Student', 'Pay Fees'],
  },
  { head: 'Principle', innerLinks: ['Student Details', 'Student List'] },
  { head: 'Profile', innerLinks: ['logout'] },
  { head: 'Administration', innerLinks: ['School'] },
];

export default function SideBar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarHead}>System</div>
      {sideLinks.map((item) => {
        return (
          <Fragment key={item.head}>
            <Link href="/" className={styles.headLink}>
              {item.head}
            </Link>
            <div className={styles.innerLinksDiv}>
              {item.innerLinks.map((links) => {
                return (
                  <Link key={links} href="/" className={styles.innerLinks}>
                    {links}
                  </Link>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
