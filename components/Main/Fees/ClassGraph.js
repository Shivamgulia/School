import { Chart, Utils } from 'chart.js';
import { useEffect } from 'react';

import styles from '../../../styles/Main/Fees/FeeGraph.module.css';

export default function ClassGraph() {
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
          data: [65, 60, 5, 81, 56, 55, 40, 58, 25, 15, 74, 86],

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
          data: [12, 23, 12, 4, 2, 5, 2, 12, 25, 24, 22, 13],

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
          xAxes: [
            {
              ticks: {
                beginAtZero: true,

                // display: true,
              },
            },
          ],
          yAxes: [
            {
              barWidth: 0,
              display: false,
            },
          ],
        },
      },
    });
  }, []);
  return (
    <div className={styles.graphCont}>
      <h1 className={styles.graphTitle}>Class Fee Statics</h1>
      <div>
        <div className={styles.graph}>
          <canvas id='myChart1'></canvas>
        </div>
      </div>
    </div>
  );
}
