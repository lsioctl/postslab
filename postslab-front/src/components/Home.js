import React, { useState, useEffect } from "react";
import { Error } from './AuthForm';

// TODO: parameters
const API_HOST = 'localhost';
const API_PORT = '5000';

function Home() {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');


  function testAuth() {
    return fetch(`http://${API_HOST}:${API_PORT}/user/authtest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // we need this on the client side to send HTTP Only cookies
      // on the API server side, we need proper CORS settings
      credentials: 'include'
    })
    .then(
      result => {
        if (result.status !== 200) {
          // This does not work, I have to look at React Errors
          // and Error boundaries. I can't create JS Errors
          //throw Error('response code not 201');
          setIsError(true);
        } else {
          return result.json();
        }
    })
    .then(data => {
      // thanks to my low understanding of errors and react, we will always
      // get there if the backend server is up and running, whatever
      // the response code is ...
      console.log(data);
      if (data) {
        setMessage(data.user);
      }
    })
    .catch(e => {
        setIsError(true);
        console.log(e);
    });
  };

  // fetching an API typically has side effects
  // this hook is used here because functional components
  // do not have lifecycle like componentDidMount()
  useEffect(() => {
    testAuth();
  });


  return (
    <div className="Home">
     This is Home, {message}
     { isError && <Error>The username or password provided were incorrect!</Error> }
    </div>
  );
}

export default Home;
