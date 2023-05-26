const url = 'http://localhost:8080';

export async function GetStudentDetails(props) {
  let response = await fetch(`${url}/api/v1/students/1/${props}`, {
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
}

export async function getSchoolList(props) {
  console.log(props.email);
  let response = await fetch(`${url}/api/v1/school/list/${props.email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + props.token,
    },
  });

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }
  return data;
}

export async function addStudent(props) {
  const student = { schoolid: 1, ...props.student };

  let response = await fetch(`${url}/api/v1/student/1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + props.token,
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
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
    `${url}/api/v1/fees/${props.schoolId}/${props.year}/${props.studentId}`,
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

  console.log(props);

  let response = await fetch(
    `${url}/api/v1/dashboard/1?month=${props.month}&year=${props.year}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + props.token,
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
      },
    }
  );

  let data = await response.json();
  await console.log(data);
  console.log(response);
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }

  return data;
}
