import Layout from '../../components/Layout/Layout';
import FeeGraph from '../../components/Main/Fees/FeeGraph';
import FeeList from '../../components/Main/Fees/FeeList';

export default function FeeDetails() {
  return (
    <Layout>
      <FeeGraph />
      <FeeList />
    </Layout>
  );
}
