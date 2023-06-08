import React, { Fragment, useState } from 'react';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import SchoolList from '../../components/Schools/SchoolList';
import CreateForm from '../../components/Admin/CreateForm';

function CreateAdmin() {
  const [school, setSchool] = useState({});
  const [showForm, setShowForm] = useState(false);

  function select(prop) {
    setSchool(prop);
    setShowForm(true);
  }

  function reset() {
    setSchool({});
    setShowForm(false);
  }

  return (
    <Fragment>
      <Layout2>
        <SchoolList select={select} />
        {showForm && <CreateForm school={school} reset={reset} />}
      </Layout2>
    </Fragment>
  );
}

export default CreateAdmin;
