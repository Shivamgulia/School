import StudentItem from './StudentItem';

import styles from '../../../styles/Main/Student/StudentList.module.css';

const list = [
  {
    classname: 'XII',
    stdList: [
      {
        enrollmentNumber: 101,
        fname: 'Shivam 1',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
      {
        enrollmentNumber: 102,
        name: 'Shivam 2',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'partially paid',
        paid: 4000,
      },
      {
        enrollmentNumber: 103,
        name: 'Shivam 3',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'pending',
        paid: 0,
      },
      {
        enrollmentNumber: 104,
        name: 'Shivam 4',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
    ],
  },
  {
    classname: 'XI',
    stdList: [
      {
        enrollmentNumber: 101,
        name: 'Shivam 1',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
      {
        enrollmentNumber: 102,
        name: 'Shivam 2',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'partially paid',
        paid: 4000,
      },
      {
        enrollmentNumber: 103,
        name: 'Shivam 3',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'pending',
        paid: 0,
      },
      {
        enrollmentNumber: 104,
        name: 'Shivam 4',
        lname: 'gulia',
        pname: 'Jitedra Kumar',
        dob: '06 june 2002',
        paymentStatus: 'completely paid',
        paid: 4000,
      },
    ],
  },
];

export default function StudentList() {
  return (
    <div>
      {list.map((item) => {
        return (
          <div key={item.classname}>
            {item.stdList.map((std) => {
              return <StudentItem key={std.enrollmentNumber} student={std} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
