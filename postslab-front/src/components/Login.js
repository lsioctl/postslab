import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Form, Input, Button, Error } from './AuthForm';
import { useAuth } from '../contexts/auth';
import userService from '../services/userService';


function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthUser } = useAuth();

  async function postLogin() {
    try {
      const json = await userService.login(userEmail, password);
      setAuthUser(json.user);
      setLoggedIn(true);
    } 
    catch (error) {
      setIsError(true);
      console.log(error);
    };
  };

  if (isLoggedIn) {
    return <Redirect to="/posts-main" />;
  };

  return (
    <Card>
      <Form>
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
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      { isError && <Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;
