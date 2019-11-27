// TODO find a way to avoid path, as this will
// not support change in directory structure
require('dotenv').config({ path: '../.env' });
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

// node has no built-in fetch
const fetch = require('node-fetch');

const post = {
  body: `Amazing first post
        I can't believe it`
};

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(post),
};

return fetch(`http://${HOST}:${PORT}/posts`, requestOptions)
.then(res => {
  if (res.status !== 201) {
    throw new Error('response code not 201');
  }
  for (let pair of res.headers.entries()) {
    console.log(pair[0]+ ': '+ pair[1]);
  };
  console.log(res.headers.get('set-cookie'));
  if (res.status !== 201) {
    throw new Error('response code not 201');
  } else {
    return res.json();
  }
})
.then(json => console.log(json))
.catch(e => {
  console.log(e);
})


