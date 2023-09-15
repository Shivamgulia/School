import React, { Fragment, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import useHttp from '../../components/hooks/use-http';
import { getAllSchool } from '../../components/lib/api';
import SchoolList from '../../components/Schools/SchoolList';

function BecomeSchool() {
  const [school, setSchool] = useState({});
  const [showForm, setShowForm] = useState(false);
  const { sendRequest, data, status, error } = useHttp(getAllSchool, true);

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/auth');
    }
    if (
      session.status === 'authenticated' &&
      session.data.user.roles[session.data.user.roles.length - 1].authority !==
        'ROLE_ADMIN'
    ) {
      router.push('/');
    }
  });

  useEffect(() => {
    sendRequest();
  }, [data]);

  function select(prop) {
    setSchool(prop);
    setShowForm(true);
  }

  function reset() {
    setSchool({});
    setShowForm(false);
  }

  console.log(data);
  return (
    <Fragment>
      <Layout2>
        {status === 'completed' && <SchoolList select={select} />}
        {showForm && (
          <div>
            <h1>{school.id}</h1>
          </div>
        )}
      </Layout2>
    </Fragment>
  );
}

export default BecomeSchool;
