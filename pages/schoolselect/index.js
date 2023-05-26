import React, { Fragment, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import SchoolList from '../../components/Main/School/SchoolList';
import useHttp from '../../components/hooks/use-http';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { getSchoolList } from '../../components/lib/api';

export default function Schools() {
  const { sendRequest, data, error, status } = useHttp(getSchoolList, true);
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    router.push('/auth');
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      const a = {
        email: session.data.user.email,
        token: session.data.user.access_token,
      };
      console.log(a);
      sendRequest({
        email: session.data.user.email,
        token: session.data.user.access_token,
      });
    }
  }, []);
  return (
    <Fragment>
      {status === 'pending' && <LoadingSpinner />}
      {status === 'completed' && <SchoolList schools={data} />}
    </Fragment>
  );
}
