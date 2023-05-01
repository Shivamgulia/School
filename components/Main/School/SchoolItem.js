import Head from 'next/head';

import styles from '../../../styles/Main/Student/StudentItem.module.css';


export default function SchoolItem(props) {
  // console.log(props);
  return (
    <div>
      <Head></Head>
      <div className={styles.centered}>
        <table className={styles.listTable}>
          <tbody className={styles.tableBody}>
            <tr>
              <td>{props.School.enrolmentNumber}</td>
              <td>{props.School.name}</td>
              <td>{props.School.city}</td>
              <td>{props.School.address}</td>
              <td>{props.School.pinCode}</td>
              <td>{props.School.phoneNo}</td>
              <td>{props.School.ownerName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
