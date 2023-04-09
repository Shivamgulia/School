import Layout from '../../components/Layout/Layout';
import Pay from '../../components/Main/Fees/Pay';
import DetailsForm from '../../components/Main/Student/DetailsForm';

export default function PayFees() {
  return (
    <Layout>
      <DetailsForm />
      <Pay />
    </Layout>
  );
}
