import styles from '../../../styles/Main/Fees/FeeList.module.css';

export default function FeeList(props) {
  const list = [
    {
      classname: 'XII',
      stdList: [
        {
          enrollmentNumber: 101,
          name: 'Shivam 1',
          paymentStatus: 'completely paid',
          paid: 4000,
        },
        {
          enrollmentNumber: 102,
          name: 'Shivam 2',
          paymentStatus: 'partially paid',
          paid: 4000,
        },
        {
          enrollmentNumber: 103,
          name: 'Shivam 3',
          paymentStatus: 'pending',
          paid: 0,
        },
        {
          enrollmentNumber: 104,
          name: 'Shivam 4',
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
          paymentStatus: 'completely paid',
          paid: 4000,
        },
        {
          enrollmentNumber: 102,
          name: 'Shivam 2',
          paymentStatus: 'partially paid',
          paid: 4000,
        },
        {
          enrollmentNumber: 103,
          name: 'Shivam 3',
          paymentStatus: 'pending',
          paid: 0,
        },
        {
          enrollmentNumber: 104,
          name: 'Shivam 4',
          paymentStatus: 'completely paid',
          paid: 4000,
        },
      ],
    },
  ];
  return (
    <div className={styles.feeTableCont}>
      {list.map((item) => (
        <table key={item.classname} className={styles.feeTable}>
          <tbody>
            <tr className={styles.feeTableClass}>
              <th> Class : {item.classname}</th>
            </tr>
            <tr className={styles.feeTableHead}>
              <th>enrollmentNumber</th>
              <th>Student Name</th>
              <th>Payment Status</th>
              <th>Fees Paid</th>
            </tr>

            {item.stdList.map((std) => (
              <tr key={std.enrollmentNumber} className={styles.feeTableData}>
                <td>{std.enrollmentNumber}</td>
                <td>{std.name}</td>
                <td>{std.paymentStatus}</td>
                <td>{std.paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
