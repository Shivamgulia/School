import StudentItem from './StudentItem';

import styles from '../../../styles/Main/Student/StudentList.module.css';

export default function StudentList(props) {
  console.log(props);
  return (
    <div className={styles.centered}>
      <h1>Student List</h1>
      <table className={styles.listTable}>
        <tbody className={styles.tableBody}>
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
        </tbody>
      </table>
      {props.Students.map((item) => {
        return <StudentItem key={item.studentId} Student={item} />;
      })}
    </div>
  );
}

// export default function StudentList() {
//   return (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <th>Enrollment Number</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Parents Name</th>
//             <th>Mob Number</th>
//             <th>Date of Birth</th>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
