import Head from 'next/head';

import styles from '../../../styles/Main/Student/StudentItem.module.css';

// export default function StudentList(props) {
//   // console.log(props.Student.DOB.getFullYear());
//   return (
//     <div className={styles.centered}>
//       <h1>Student Details</h1>
//       <div className={styles.studentdItemConstiner}>
//         <div className={styles.dataField}>
//           <label htmlFor="Name"> First Name</label>
//           <input
//             type="text"
//             name="Name"
//             id="Name"
//             value={props.Student.firstName}
//             readOnly
//           />
//         </div>
//         <div className={styles.dataField}>
//           <label htmlFor="lastName"> Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={props.Student.lastName}
//             readOnly
//           />
//         </div>
//         <div className={styles.dataField}>
//           <label htmlFor="parentName">Parent's Name</label>
//           <input
//             type="text"
//             name="parentName"
//             id="parentName"
//             value={props.Student.parentName}
//             readOnly
//           />
//         </div>
//         <div className={styles.dataField}>
//           <label htmlFor="MOB">Mobile Number</label>
//           <input
//             type="Number"
//             name="MOB"
//             id="MOB"
//             placeholder={props.Student.phone}
//             readOnly
//           />
//         </div>
//         <div className={styles.dataField}>
//           <label htmlFor="DOB">Date Of Birth</label>
//           <input
//             type="date"
//             name="DOB"
//             id="DOB"
//             value={props.Student.DOB.getDate()}
//             readOnly
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function StudentItem(props) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.centered}>
        <h1>Student Details</h1>
        <div className={styles.details}>
          <h3>Enrollment Number: {props.Student.enrolmentNumber}</h3>
          <h3>First Name : {props.Student.firstName}</h3>
          <h3>Last Name : {props.Student.lastName}</h3>
          <h3>Parents Name : {props.Student.parentName}</h3>
          <h3>Mob Number : {props.Student.phone}</h3>
          <h3>Date of Birth : {props.Student.DOB}</h3>
        </div>
      </div>
    </div>
  );
}
