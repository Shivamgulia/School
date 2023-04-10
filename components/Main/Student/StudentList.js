import StudentItem from './StudentItem';

import styles from '../../../styles/Main/Student/StudentList.module.css';

const list = [
  {
    classname: 'XII',
    stdList: [
      {
        enrolmentNumber: 101,
        firstName: 'Shivam 1',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
      {
        enrolmentNumber: 102,
        firstName: 'Shivam 2',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'partially paid',
        paid: 4000,
      },
      {
        enrolmentNumber: 103,
        firstName: 'Shivam 3',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'pending',
        paid: 0,
      },
      {
        enrolmentNumber: 104,
        firstName: 'Shivam 4',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
    ],
  },
  {
    classname: 'XI',
    stdList: [
      {
        enrolmentNumber: 101,
        firstName: 'Shivam 1',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
      {
        enrolmentNumber: 102,
        firstName: 'Shivam 2',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'partially paid',
        paid: 4000,
      },
      {
        enrolmentNumber: 103,
        firstName: 'Shivam 3',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'pending',
        paid: 0,
      },
      {
        enrolmentNumber: 104,
        firstName: 'Shivam 4',
        lastName: 'gulia',
        parentName: 'Jitedra Kumar',
        DOB: '06 june 2002',
        phone: '8279373573',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
    ],
  },
];

export default function StudentList() {
  return (
    <div className={styles.centered}>
      <h1>Student List</h1>
      <table className={styles.listTable}>
        <tbody className={styles.tableBody}>
          <tr>
            <th>SR. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Parents Name</th>
            <th>Mobile/ Phone No.</th>
            <th>Date of Birth</th>
          </tr>
        </tbody>
      </table>
      {list.map((item) => {
        return (
          <div key={item.classname}>
            {item.stdList.map((std) => {
              return <StudentItem key={std.enrolmentNumber} Student={std} />;
            })}
          </div>
        );
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
