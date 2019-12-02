// TODO: parameters
const API_HOST = 'localhost';
const API_PORT = '5000';
const apiUrl = `http://${API_HOST}:${API_PORT}`


async function list() {
  const response = await fetch(`${apiUrl}/posts`, {
    // we need this on the client side to send HTTP Only cookies
    // on the API server side, we need proper CORS settings
    credentials: 'include',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  // fetch will only reject a Promise if there is a network error.
  // so we have to throw error ourselves if the response is not in
  // the 2xx range
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  return json;
};

async function post(postBody) {
  const response = await fetch(`${apiUrl}/posts`, {
    // we need this on the client side to send HTTP Only cookies
    // on the API server side, we need proper CORS settings
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: postBody
    })
  });
  // fetch will only reject a Promise if there is a network error.
  // so we have to throw error ourselves if the response is not in
  // the 2xx range
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  return json;
};

export default {
  list,
  post
}