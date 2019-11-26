// TODO: parameters
const API_HOST = 'localhost';
const API_PORT = '5000';
const apiUrl = `http://${API_HOST}:${API_PORT}`


async function signup(userName, userEmail, password) {
  try {
    const response = await fetch(`${apiUrl}/user/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: userName,
        email: userEmail,
        password: password 
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
  } catch (error) {
    console.log(error);
  };
};

async function login(userEmail, password) {
  try {
    const response = await fetch(`${apiUrl}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // this one is need to allow the cookie to be set with
      // the informations sent by the API server
      credentials: 'include',
      body: JSON.stringify({
        email: userEmail,
        password: password 
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
  } catch (error) {
    console.log(error);
  };
};

async function testAuth() {
  try {
    const response = await fetch(`http://${API_HOST}:${API_PORT}/user/authtest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // we need this on the client side to send HTTP Only cookies
      // on the API server side, we need proper CORS settings
      credentials: 'include'
    });
    // fetch will only reject a Promise if there is a network error.
    // so we have to throw error ourselves if the response is not in
    // the 2xx range
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    // this.setState({ data: json });
    return json;
  } catch (error) {
      console.log(error);
  };
};

export default {
  login,
  testAuth,
  signup
}