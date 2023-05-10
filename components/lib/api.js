const url = 'http://localhost:8080';

export async function GetStudentDetails(props) {
  let response = await fetch(`${url}/students/1/${props}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + props.token,
    },
  });

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }
  // console.log(data);

  return data;
  // return {
  //   studentId: 1,
  //   firstName: 'Shivam',
  //   lastName: 'Gulia',
  //   fatherName: 'JK',
  //   phone: 8761234,
  // };
}

export async function getSchoolStudent(props) {
  let response = await fetch(`${url}/schoolstudents/1`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + props.token,
    },
  });

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }
  return data;
}

export async function addStudent(props) {
  const student = { schoolid: 1, ...props };
  let response = await fetch(`${url}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + props.token,
    },
    body: JSON.stringify(student),
  });

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }

  console.log(data);

  return data;
}

export async function getFeesDetails(props) {
  let response = await fetch(
    `${url}/fees/${props.schoolId}/${props.year}/${props.studentId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + props.token,
      },
    }
  );

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }

  return data;
}

export async function submitFees(props) {
  // return true;

  let response = await fetch(
    `${url}/fees/${props.schoolId}/${props.year}/${props.studentId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + props.token,
      },
      body: JSON.stringify(props),
    }
  );

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }

  return data;
}

export async function graphList(props) {
  // return true;

  let response = await fetch(
    `${url}/dashboard/1?month=${props.month}&year=${props.year}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + props.token,
      },
    }
  );

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }

  return data;
}
