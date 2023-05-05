import { Fragment, useEffect, useState } from 'react';
import styles from '../../../styles/Main/Fees/PayForm.module.css';
import useHttp from '../../hooks/use-http';
import { submitFees } from '../../lib/api';

export default function PayForm(props) {
  const [isLoading, setIsLoading] = useState({ pro: true });
  const [checkArray, setCheckArray] = useState([
    { month: 1, paid: false, amount: 0 },
    { month: 2, paid: false, amount: 0 },
    { month: 3, paid: false, amount: 0 },
    { month: 4, paid: false, amount: 0 },
    { month: 5, paid: false, amount: 0 },
    { month: 6, paid: false, amount: 0 },
    { month: 7, paid: false, amount: 0 },
    { month: 8, paid: false, amount: 0 },
    { month: 9, paid: false, amount: 0 },
    { month: 10, paid: false, amount: 0 },
    { month: 11, paid: false, amount: 0 },
    { month: 12, paid: false, amount: 0 },
  ]);

  const { sendRequest, error, status } = useHttp(submitFees, false);

  function submitionHandler() {
    let feeDTO = [];
    let a = feeDTO;
    a.filter(() => {
      return true;
    });
    let arr = [];
    checkArray.map((item) => {
      if (item.paid === true) {
        const temp = {
          feeAmount: item.amount,
          month: item.month,
        };
        arr = feeDTO;
        arr.push(temp);
      }
    });
    feeDTO = arr;

    //

    const requestObj = {
      schoolId: 1,
      studentId: props.Student.id.studentId,
      receiverId: 1,
      receiverName: 'adit',
      year: props.year,
      standard: props.Student.standard,
      feeType: 'SCHOOL',
      schoolFees: {
        feeDTO: feeDTO,
      },
      busFees: {
        feeDTO: [],
      },
    };

    console.log(requestObj);
    sendRequest(requestObj);
  }

  //
  //
  //

  const [afterList, setAfterList] = useState([...monthList]);
  useEffect(() => {
    setIsLoading({ pro: true });

    afterList.map((item) => {
      item.amount = 0;
      item.paid = false;
      item.topay = false;
    });

    console.log(afterList);
    let arr = afterList;
    console.log(arr);
    if (props.fee) {
      props.fee.feeList.map((fees) => {
        arr[fees.month - 1].amount = fees.feeAmount;
        arr[fees.month - 1].paid = fees.paid;
      });
      console.log('paid');
    }
    setAfterList([...arr]);
    setIsLoading({ pro: false });
  }, [props.fee]);

  //
  //
  //
  if (isLoading.pro) {
    return (
      <div>
        <h1>Loading.... </h1>
      </div>
    );
  }

  if (props.fee)
    return (
      <Fragment>
        <h1>Fee Table</h1>
        {!isLoading.pro && (
          <div className={styles.listCont}>
            {afterList.map((item) => {
              return (
                <Fragment key={item.month}>
                  <div
                    className={styles.checkCont}
                    onClick={() => {
                      if (!item.paid) {
                        let arr = [...checkArray];
                        arr[item.mon - 1].paid = !arr[item.mon - 1].paid;
                        arr[item.mon - 1].amount = props.fee.feeNow;
                        setCheckArray(arr);
                      }
                    }}
                  >
                    <FeeMonth
                      data={item}
                      feeAmount={props.fee.feeNow}
                      checked={checkArray[item.mon - 1].paid}
                    />
                    {/* {!item.paid && (
                  <input
                    type="checkbox"
                    name={item.mon}
                    checked={checkArray[item.mon - 1].paid}
                    onChange={() => {
                      let arr = [...checkArray];
                      arr[item.mon - 1].paid = !arr[item.mon - 1].paid;
                      arr[item.mon - 1].amount = props.fee.feeNow;
                      setCheckArray(arr);
                    }}
                  />
                )} */}
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
        <button
          onClick={() => {
            submitionHandler();
          }}
        >
          Submit Fees
        </button>
        {status === 'completed' && (
          <div>
            <h1>Fee Submited</h1>
          </div>
        )}
      </Fragment>
    );
}

//
//
//
//
//

function FeeMonth(props) {
  return (
    <Fragment>
      <div
        className={`${styles.monthCont} ${
          props.data.paid ? styles.paid : styles.notPaid
        } ${props.checked ? styles.checked : null}`}
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

//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//

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
