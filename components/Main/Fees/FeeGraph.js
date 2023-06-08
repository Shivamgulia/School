import styles from '../../../styles/Main/Fees/FeeGraph.module.css';

import { useEffect } from 'react';
import { Chart } from 'chart.js';
export default function FeeGraph(props) {
  const sub = 50;
  const pen = 29;

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    const data = {
      labels: ['Fee'],
      datasets: [
        {
          label: 'Submitted',
          data: [{ y: props.sub }],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Pending',
          data: [{ y: props.pen }],
          backgroundColor: 'rgba(192, 75, 75, 0.6)',
          borderColor: 'rgba(192, 75, 75, 1)',
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
              // display: false,
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                // display: true,
                stepSize: sub / 4,
              },
              // display: false,
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
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </div>
  );
}
