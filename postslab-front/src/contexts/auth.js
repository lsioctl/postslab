import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider(props) {
  const [authUser, setAuthUser] = useState();

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }} {...props} />
  )

}

export {
  AuthProvider,
  useAuth
}