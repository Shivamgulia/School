import Layout from '../../components/Layout/Layout';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import FeeGraph from '../../components/Main/Fees/FeeGraph';
import FeeList from '../../components/Main/Fees/FeeList';

export default function FeeDetails() {
  return (
    <Layout2>
      <div style={{ display: 'grid', 'justify-content': 'center' }}>
        <FeeGraph />
        <FeeList />
      </div>
    </Layout2>
  );
}
