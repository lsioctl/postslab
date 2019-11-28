
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Error } from './AuthForm';
import userService from '../services/userService';
import './Login.css';


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
    <div className="sign-up">
      <div className="login__card">
        <div className="login__card__header">
          Sign Up to PostsLab
        </div>
        <form onSubmit={postSignup} className="login__card__form">
          <input className="login__card__form__input"
            type="username"
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
            }}
            placeholder="username"
          />
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
          <input className="login__card__form__input"
            type="password"
            value={passwordAgain}
            onChange={e => {
              setPasswordAgain(e.target.value);
            }}
            placeholder="password again"
          />
          <button className="login__card__form__button" onClick={postSignup}>Sign Up</button>
        </form>
        { isError && <Error>The username or password provided were incorrect!</Error> }
        { isCompareError && <Error>The two passwords do not match</Error> }
        <div className="login__card__footer">
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;