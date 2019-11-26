
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Error } from './AuthForm';
import userService from '../services/userService';

function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isError, setIsError] = useState(false);

  // fetching an API typically has side effects
  // this hook is used here because functional components
  // do not have lifecycle like componentDidMount()
  useEffect(() => {
    // eslint points to the fact that effect callbacks are synchronous to avoide race condition
    // so we have to add this boilerplate
    async function fetchData() {
      try {
        const json = await userService.logout();
        console.log(json);
      } catch (error) {
        setIsError(true);
        console.log(error);
      };
    };
    fetchData();
  }, []);

  if (isLoggedOut) {
    return <Redirect to="/" />;
  };

  return (
    <Card>
      Log out in progress
      { isError && <Error>Logout error</Error> }
    </Card>
  );
}

export default Logout;