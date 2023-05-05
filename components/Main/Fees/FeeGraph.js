import styles from '../../../styles/Main/Fees/FeeGraph.module.css';

import { useEffect } from 'react';
import { Chart } from 'chart.js';
export default function FeeGraph(props) {
  const sub = 50;
  const pen = 29;

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    const data = {
      datasets: [
        {
          label: 'Submitted',
          data: [sub],
          backgroundColor: ['rgb(158, 250, 158)'],
          borderColor: ['rgb(158, 250, 158)'],
          borderWidth: 1,
        },
        {
          label: 'Pending',
          data: [pen],
          backgroundColor: ['rgb(252, 80, 80)'],
          borderColor: ['rgb(252, 80, 80)'],
          borderWidth: 1,
        },
      ],
    };
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          xAxes: [
            {
              barPercentage: 0.4,
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className={styles.graphCont}>
      <h1 className={styles.graphTitle}>Fee Statics</h1>
      <div>
        <div className={styles.graph}>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
}
