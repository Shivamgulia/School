
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Text, ResponsiveContainer } from 'recharts';
import styles from '../../../styles/Main/Fees/ClassChart.module.css'


const data = [
  { class: 'Nur', submitted: 20, Pending: 80, total: 100 },
  { class: 'LKG', submitted: 20, Pending: 80,total: 100 },
  { class: 'UKG', submitted: 20, Pending: 80,total: 100 },
  { class: 'I', submitted: 20, Pending: 80,total: 100 },
  { class: 'II', submitted: 60, Pending: 90,total: 150 },
  { class: 'IV', submitted: 75, Pending: 45,total: 120 },
  { class: 'V', submitted: 75, Pending: 45,total: 120 },
  { class: 'VI', submitted: 75, Pending: 45,total: 120 },
  { class: 'VII', submitted: 75, Pending: 45,total: 120 },
  { class: 'VIII', submitted: 75, Pending: 45,total: 120 },
  { class: 'IX', submitted: 75, Pending: 45,total: 120 },
  { class: 'X', submitted: 75, Pending: 45,total: 120 },
  { class: 'XI', submitted: 75, Pending: 45,total: 120 },
  { class: 'XII', submitted: 75, Pending: 45,total: 120 },
  // Add more data as needed
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { class: standard, total, submitted, Pending } = payload[0].payload;
    return (
      <div className={styles.tooltip}>
        <p>{`Class: ${standard}`}</p>
        <p>{`Total Students: ${total}`}</p>
        <p>{`Submitted: ${submitted}`}</p>
        <p>{`Pending: ${Pending}`}</p>
      </div>
    );
  }
  return null;
};

const ClassChart = () => (
    <div className={styles.chartContainer} >
        <Text className={styles.chartTitle}>
            Class Fee Submission Statics
        </Text>
        <ResponsiveContainer width="70%" height="70%">
          <BarChart data={data}>
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} className={styles.tooltip} cursor={{fill: '#fff'}} wrapperStyle={{backgroundColor:"rgb(0, 0, 0, 0.8)", color:"white", padding:"5px", borderRadius:"5px"}}/>
              <Legend />
              <Bar dataKey="submitted" stackId="status" fill="rgb(236, 51, 51, 0.4)" />
              <Bar dataKey="Pending" stackId="status" fill="rgb(37, 209, 37, 0.4)">
                  <LabelList dataKey="total" position="top" fill="#000" />
              </Bar>
          </BarChart>
        </ResponsiveContainer>
    </div>
);

export default ClassChart;
