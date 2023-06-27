import StudentItem from './StudentItem';

import styles from '../../../styles/Main/Student/StudentList.module.css';

export default function StudentList(props) {
  console.log(props);
  return (
    <div className={styles.centered}>
      <h1>Student List</h1>

      <table className={styles.listTable}>
        <thead className={styles.tableBody}>
          <tr>
            <th>SR. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Mobile/ Phone No.</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Class</th>
          </tr>
        </thead>
      </table>

      {props.Students.map((item) => {
        return <StudentItem key={item.studentId} Student={item} />;
      })}
    </div>
  );
}
