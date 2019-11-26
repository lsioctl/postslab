import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
// it uses render props and HOC patterns
function PrivateRoute({ component: Component, ...rest }) {

  // we use our custom hook to get the auth context
  const authContext = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        authContext.authUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;