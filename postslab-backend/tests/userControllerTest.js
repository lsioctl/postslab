// TODO find a way to avoid path, as this will
// not support change in directory structure
require('dotenv').config({ path: '../.env' });
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

// node has no built-in fetch
const fetch = require('node-fetch');

const user = {
  email: 'toto7@toto.com',
  password: 'toto'
};

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user)
};

return fetch(`http://${HOST}:${PORT}/user/login`, requestOptions)
.then(res => res.json())
.then(json => console.log(json));
