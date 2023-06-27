import Head from 'next/head';

import styles from '../../../styles/Main/Student/StudentItem.module.css';

export default function StudentItem(props) {
  return (
    <div>
      <Head></Head>

      <div className={styles.centered}>
        <table className={styles.listTable}>
          <tbody className={styles.tableBody}>
            <tr>
              <td key={props.Student.id.studentId}>
                {props.Student.id.studentId}
              </td>
              <td key={props.Student.firstName}>{props.Student.firstName}</td>
              <td key={props.Student.lastName}>{props.Student.lastName}</td>
              <td key={props.Student.fatherName}>{props.Student.fatherName}</td>
              <td key={props.Student.motherName}>{props.Student.motherName}</td>
              <td key={props.Student.phone}>{props.Student.phone}</td>
              <td key={props.Student.dob}>{props.Student.dob}</td>
              <td key={props.Student.gender}>{props.Student.gender}</td>
              <td key={props.Student.classLevel}>{props.Student.classLevel}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
