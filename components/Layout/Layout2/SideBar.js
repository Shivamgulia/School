import React from 'react';
import styles from './../../../styles/Layout/Layout2/SideBar.module.css';
// import {
//   Home,
//   Timeline,
//   TrendingUp,
//   PeopleAltOutlined,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutlineOutlined,
//   Report,
// } from "@material-ui/icons";
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarContainer}>
        <div className={styles.SideBarDashboard}>
          <h4 className={styles.sideBarListTitle}>Dashboard</h4>
          <ul className={styles.sideBarList}>
            <Link href="/" className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                {/* <Home className={styles.sideBarLogo} /> */}
                Home
              </li>
            </Link>
            <li className={styles.sideBarListItem}>
              {/* <Timeline className={styles.sideBarLogo} /> */}
              Analytics
            </li>
            <li className={styles.sideBarListItem}>
              {/* <TrendingUp className={styles.sideBarLogo} /> */}
              Sale
            </li>
          </ul>
        </div>
        <div className={styles.sideBarQuickMenu}>
          <h4 className={styles.sideBarListTitle}>QuickMenu</h4>
          <ul className={styles.sideBarList}>
            <Link href="/users" className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                {/* <PeopleAltOutlined className={styles.sideBarLogo} /> */}
                Users
              </li>
            </Link>
            <Link href="/products" className={styles.link}>
              <li className={`${styles.sideBarListItem} ${styles.active}`}>
                {/* <Storefront className={styles.sideBarLogo} /> */}
                Products
              </li>
            </Link>
            <li className={styles.sideBarListItem}>
              {/* <AttachMoney className={styles.sideBarLogo} /> */}
              Transaction
            </li>
            <li className={styles.sideBarListItem}>
              {/* <BarChart className={styles.sideBarLogo} /> */}
              Reports
            </li>
          </ul>
        </div>
        <div className={styles.sideBarNotification}>
          <h4 className={styles.sideBarListTitle}>Notification</h4>
          <ul className={styles.sideBarList}>
            <li className={styles.sideBarListItem}>
              {/* <MailOutline className={styles.sideBarLogo} /> */}
              MailOutline
            </li>
            <li className={styles.sideBarListItem}>
              {/* <DynamicFeed className={styles.sideBarLogo} /> */}
              Feedback
            </li>
            <li className={styles.sideBarListItem}>
              {/* <ChatBubbleOutline className={styles.sideBarLogo} /> */}
              Messages
            </li>
          </ul>
        </div>
        <div className={styles.sideBarStaff}>
          <h4 className={styles.sideBarListTitle}>Staff</h4>
          <ul className={styles.sideBarList}>
            <li className={styles.sideBarListItem}>
              {/* <WorkOutlineOutlined className={styles.sideBarLogo} /> */}
              Manage
            </li>
            <li className={styles.sideBarListItem}>
              {/* <Timeline className={styles.sideBarLogo} /> */}
              Analytics
            </li>
            <li className={styles.sideBarListItem}>
              {/* <Report className={styles.sideBarLogo} /> */}
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
