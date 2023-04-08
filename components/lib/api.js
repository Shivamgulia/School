const url = '';

export async function getStudentDetails(props) {
  let response = await fetch(`${url}/student/${props.id}`, {
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
