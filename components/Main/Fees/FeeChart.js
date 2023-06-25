
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Text, ResponsiveContainer } from 'recharts';
import styles from '../../../styles/Main/Fees/ClassChart.module.css'


const data = [
  { class: 'Total', submitted: 20, Pending: 80, total: 100 },
  // Add more data as needed
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { class: standard, total, submitted, Pending } = payload[0].payload;
    return (
        // <ResponsiveContainer width="10vw" height="30%">
                <div className={styles.tooltip}>
                <p>{`Total Students: ${total}`}</p>
                <p>{`Submitted: ${submitted}`}</p>
                <p>{`Pending: ${Pending}`}</p>
            </div>
        // </ResponsiveContainer>
    );
  }
  return null;
};

const FeeChart = () => (
    <div className={styles.chartContainer} >
        <Text className={styles.chartTitle}>
            School Fee Submission Statics
        </Text>
        <ResponsiveContainer width="70%" height="70%">
          <BarChart data={data} >
              <XAxis  />
              <YAxis />
              <Tooltip content={<CustomTooltip />} className={styles.tooltip} cursor={{fill: '#fff'}} wrapperStyle={{backgroundColor:"rgb(0, 0, 0, 0.8)", color:"white", padding:"5px", borderRadius:"5px"}}/>
              <Legend />
              <Bar dataKey="submitted" fill="rgb(236, 51, 51, 0.4)" barSize="40%"/>
              <Bar dataKey="Pending" fill="rgb(37, 209, 37, 0.4)" barSize="40%">
                  <LabelList dataKey="total" position="top" fill="#000" />
              </Bar>
          </BarChart>
        </ResponsiveContainer>
    </div>
);

export default FeeChart;
