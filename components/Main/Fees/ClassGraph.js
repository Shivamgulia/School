import { Chart } from 'chart.js';
import { useEffect } from 'react';

import styles from '../../../styles/Main/Fees/ClassGraph.module.css';

export default function ClassGraph(props) {
  const submittedList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const pendingList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    var chartclass = document.getElementById('myChart1').getContext('2d');
    const data = {
      labels: [
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
      ],
      datasets: [
        {
          label: 'Submitted',
          data: submittedList,

          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
          ],
          borderWidth: 1,
          barWidth: 100,
        },
        {
          label: 'Pending',
          data: pendingList,

          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
          ],
          borderWidth: 1,
          barWidth: 4,
        },
      ],
    };
    var myChart = new Chart(chartclass, {
      type: 'horizontalBar',
      data: data,
      options: {
        scales: {
          // xAxes: [
          //   {
          //     ticks: {
          //       beginAtZero: true,
          //       // display: true,
          //     },
          //   },
          // ],
          // yAxes: [
          //   {
          //     barWidth: 0,
          //     // display: false,
          //   },
          // ],
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
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
