import React, { useState, useEffect } from 'react';
import { Error } from './AuthForm';
import userService from '../services/userService';

function Home() {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // eslint points to the fact that effect callbacks are synchronous to avoide race condition
    // so we have to add this boilerplate
    async function fetchAndSetMessage() {
      try {
        const json = await userService.testAuth();
        setMessage(json.user);
      } 
      catch (error) {
        setIsError(true);
        console.log(error);
      };
    };
    fetchAndSetMessage();
  }, []);


  return (
    <div className="Home">
     This is Home, {message}
     { isError && <Error>Something went wrong with your credentials</Error> }
    </div>
  );
};

export default Home;
