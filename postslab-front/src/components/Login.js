import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Error } from './AuthForm';
import { useAuth } from '../contexts/auth';
import userService from '../services/userService';
import './Login.css';


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
    <div className="login">
      <div className="login__card">
      <form className="login__card__form">
        <input className="login__card__form__input"
          type="email"
          value={userEmail}
          onChange={e => {
            setUserEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input className="login__card__form__input"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button className="login__card__form__button" onClick={postLogin}>Sign In</button>
      </form>
      <Link to="/signup">Don't have an account?</Link>
      { isError && <Error>The username or password provided were incorrect!</Error> }
    </div>
    </div>
  );
}

export default Login;
