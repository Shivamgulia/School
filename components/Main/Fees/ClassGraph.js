import { Chart } from 'chart.js';
import { useEffect } from 'react';

import styles from '../../../styles/Main/Fees/ClassGraph.module.css';

export default function ClassGraph(props) {
  const submittedList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 8];
  const pendingList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 17];

  //to put the data from api request into the array
  useEffect(() => {
    props.data.map((item) => {
      const st = item.standard;
      submittedList[st - 1] = item.totalSubmitted;
      pendingList[st - 1] = item.totalPending;
    });
  }, [props]);

  //to define the chart
  useEffect(() => {
    const classes = [
      'Nursery',
      'LKG',
      'UKG',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      'XI',
      'XII',
    ];

    // Data for the x-axis (number of students)

    // Generate the chart
    const ctx = document.getElementById('myChart1').getContext('2d');
    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: classes,
        datasets: [
          {
            label: 'Submitted',
            data: submittedList,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Pending',
            data: pendingList,
            backgroundColor: 'rgba(192, 75, 75, 0.6)',
            borderColor: 'rgba(192, 75, 75, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }, []);
  return (
    <div className={styles.graphCont}>
      <h1 className={styles.graphTitle}>Class Fee Statics</h1>
      <div>
        <div className={styles.graph}>
          <canvas id='myChart1' className={styles.chartCanvas}></canvas>
        </div>
      </div>
    </div>
  );
}
