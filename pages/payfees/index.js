import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Pay from '../../components/Main/Fees/Pay';
import DetailsForm from '../../components/Main/Student/DetailsForm';

export default function PayFees() {
  const [getDets, setGetDets] = useState(false);
  return (
    <Layout>
      <DetailsForm
        showDetails={(props) => {
          setGetDets(props);
        }}
      />
      {getDets && <Pay />}
    </Layout>
  );
}
