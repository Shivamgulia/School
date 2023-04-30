import { Fragment, useEffect, useState } from 'react';
import styles from '../../../styles/Main/Fees/PayForm.module.css';

export default function PayForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  let forupdate = monthList;
  let afterList = monthList;
  useEffect(() => {
    afterList = monthList;
    props.fee.feeList.map((fees) => {
      afterList[fees.month - 1].amount = fees.feeAmount;
      afterList[fees.month - 1].paid = fees.paid;
    });
    setIsLoading(true);
  }, [props.fee.feeList]);
  return (
    <Fragment>
      <h1>Fee Table</h1>
      <div className={styles.listCont}>
        {afterList.map((item) => {
          return (
            <Fragment key={item.month}>
              <div className={styles.checkCont}>
                <FeeMonth data={item} feeAmount={props.fee.feeNow} />
                {!item.paid && <input type="checkbox" name={item.mon} />}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}

function FeeMonth(props) {
  return (
    <Fragment>
      <div
        className={`${styles.monthCont} ${
          props.data.paid ? styles.paid : styles.notPaid
        }`}
      >
        <h3 className={styles.data}>{props.data.month}</h3>
        {props.data.paid && (
          <h3 className={styles.data}>{props.data.amount}</h3>
        )}
        {!props.data.paid && <h3 className={styles.data}>{props.feeAmount}</h3>}
      </div>
    </Fragment>
  );
}

let monthList = [
  {
    mon: 1,
    month: 'January',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 2,
    month: 'February',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 3,
    month: 'March',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 4,
    month: 'April',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 5,
    month: 'May',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 6,
    month: 'June',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 7,
    month: 'July',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 8,
    month: 'August',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 9,
    month: 'September',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 10,
    month: 'October',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 11,
    month: 'November',
    amount: 0,
    paid: false,
    topay: false,
  },
  {
    mon: 12,
    month: 'December',
    amount: 0,
    paid: false,
    topay: false,
  },
];
