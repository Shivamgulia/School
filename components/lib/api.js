const url = 'http://localhost:8080';

export async function getStudentDetails(props) {
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
  return data;
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
  let response = await fetch(`${url}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + props.token,
    },
    body: JSON.stringify(props),
  });

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }

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

export async function updateFees(props) {
  let response = await fetch(`${url}/updatefees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + props.token,
    },
    body: JSON.stringify(props),
  });

  let data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not Add Student.');
  }

  return data;
}
