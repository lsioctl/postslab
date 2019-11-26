
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Form, Input, Button, Error } from './AuthForm';
import userService from '../services/userService';

function Signup() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCompareError, setIsCompareError] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");


  async function postSignup() {
    if (password !== passwordAgain) {
      setIsCompareError(true);
    } else {
      try {
        // todo: check json truth if something went south
        const json = await userService.signup(userName, userEmail, password);
        if (json) {
          setIsSignedUp(true);
        }
      } catch (error) {
        setIsError(true);
        console.log(error);
      };
    }
  };

  if (isSignedUp) {
    return <Redirect to="/signed-up" />;
  };

  return (
    <Card>
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="email"
          value={userEmail}
          onChange={e => {
            setUserEmail(e.target.value);
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
        <Input
          type="password"
          value={passwordAgain}
          onChange={e => {
            setPasswordAgain(e.target.value);
          }}
          placeholder="password again"
        />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      { isError && <Error>The username or password provided were incorrect!</Error> }
      { isCompareError && <Error>The two passwords do not match</Error> }
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;