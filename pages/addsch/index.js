import React, { Fragment } from 'react';
import Layout2 from '../../components/Layout/Layout2/Layout2';
import Head from 'next/head';
import AddSchool from '../../components/Main/School/AddSchool';

function addSch() {
  function sumbitionHandler() {}
  return (
    <Fragment>
      <Head>
        <title>Add School</title>
      </Head>
      <Layout2>
        <AddSchool />
      </Layout2>
    </Fragment>
  );
}

export default addSch;
