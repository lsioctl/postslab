import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Input, Button, Error } from './AuthForm';
import { useAuth } from "../contexts/auth";
// TODO: parameters
const API_HOST = 'localhost';
const API_PORT = '5000';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    return fetch(`http://${API_HOST}:${API_PORT}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userName,
        password: password 
      })
    })
    .then(
      result => {
        if (result.status !== 201) {
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
        console.log('yatah');
        setAuthTokens(data);
        setLoggedIn(true);
      }
    })
    .catch(e => {
        setIsError(true);
        console.log(e);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Form>
      <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      { isError && <Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;
