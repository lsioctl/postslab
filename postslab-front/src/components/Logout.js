
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Error } from './AuthForm';
import userService from '../services/userService';
import { useAuth } from '../contexts/auth';

function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthUser } = useAuth();

  // we use setAuthUser as a depency to avoid this component to re-render
  // after we logged-out
  useEffect(() => {
    // eslint points to the fact that effect callbacks are synchronous to avoide race condition
    // so we have to add this boilerplate
    async function fetchData() {
      try {
        const json = await userService.logout();
        if (json) {
          setIsLoggedOut(true);
          setAuthUser();
        }
      } 
      catch (error) {
        setIsError(true);
        console.log(error);
      };
    };
    fetchData();
  }, [setAuthUser]) ;

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