import SchoolItem from './SchoolItem';

import styles from '../../../styles/Main/Student/StudentList.module.css';

const list = [

    {
    enrolmentNumber: 101,
    name: 'XYZ School',
    city: 'xyz',
    address: '45/2, xyz Road, city, district, UP, INDIA',
    pinCode: '250501',
    phoneNo: 'xxxxxxxxxx',
    ownerName: 'some name',
    },

    {
    enrolmentNumber: 101,
    name: 'XYZ School',
    city: 'xyz',
    address: '45/2, xyz Road, city, district, UP, INDIA',
    pinCode: '250501',
    phoneNo: 'xxxxxxxxxx',
    ownerName: 'some name',
    },

    {
    enrolmentNumber: 101,
    name: 'XYZ School',
    city: 'xyz',
    address: '45/2, xyz Road, city, district, UP, INDIA',
    pinCode: '250501',
    phoneNo: 'xxxxxxxxxx',
    ownerName: 'some name',
    },

    {
    enrolmentNumber: 101,
    name: 'XYZ School',
    city: 'xyz',
    address: '45/2, xyz Road, city, district, UP, INDIA',
    pinCode: '250501',
    phoneNo: 'xxxxxxxxxx',
    ownerName: 'some name',
    },

    {
    enrolmentNumber: 101,
    name: 'XYZ School',
    city: 'xyz',
    address: '45/2, xyz Road, city, district, UP, INDIA',
    pinCode: '250501',
    phoneNo: 'xxxxxxxxxx',
    ownerName: 'some name',
    },

    {
    enrolmentNumber: 101,
    name: 'XYZ School',
    city: 'xyz',
    address: '45/2, xyz Road, city, district, UP, INDIA',
    pinCode: '250501',
    phoneNo: 'xxxxxxxxxx',
    ownerName: 'some name',
    }
];

export default function SchoolList() {
  return (
    <div className={styles.centered}>
      <h1>School List</h1>
      <table className={styles.listTable}>
        <tbody className={styles.tableBody}>
          <tr>
            <th>SR. No.</th>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>PinCode</th>
            <th>Phone No.</th>
            <th>Owner Name</th>
          </tr>
        </tbody>
      </table>
      {list.map((school) => {
        return (
            <SchoolItem key={school.enrolmentNumber} School={school} />
        );
      })}
    </div>
  );
}

