import styles from '../../../styles/Main/Fees/FeeGraph.module.css';

import { useEffect } from 'react';
import { Chart } from 'chart.js';
export default function FeeGraph(props) {
  const sub = 50;
  const pen = 20;
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Submitted', 'Pending'],
        datasets: [
          {
            data: [sub, pen],
            borderColor: [
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(255, 99, 132)',
            ],
            backgroundColor: [
              'rgb(75, 192, 192 )',
              'rgb(255, 205, 86)',
              'rgb(255, 99, 132)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className={styles.graphCont}>
      {/* Doughnut chart */}
      <h1 className={styles.graphTitle}>Fee Statics</h1>
      <div>
        <div className={styles.graph}>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
}
