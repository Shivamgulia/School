import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import CreateForm from '../Admin/CreateForm';

const list = [
  {
    id: 1,
    name: 'CVPS',
    city: 'Meerut',
    owner: 'shivam',
  },
  {
    id: 2,
    name: 'APS',
    city: 'Meerut',
    owner: 'Adit Choudhary',
  },
  {
    id: 3,
    name: 'HPS',
    city: 'Meerut',
    owner: 'Hritik',
  },
  {
    id: 4,
    name: 'IPS',
    city: 'Nurpur',
    owner: 'Ivan Gulia',
  },
];

function SchoolList(props) {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.replace('/');
    }
  });
  return (
    <Fragment>
      <h1>List</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>SchoolID</th>
              <th>Name</th>
              <th>City</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div>
                      <button
                        onClick={() => {
                          props.select(item);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.owner}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default SchoolList;
