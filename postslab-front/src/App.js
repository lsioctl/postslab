import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
//import DevNavBar from './components/DevNavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import SignedUp from './components/SignedUp';
import Logout from './components/Logout';
import Main from './components/Main';

import { AuthContext, AuthProvider } from './contexts/auth'
import PrivateRoute from './components/PrivateRoute';

function App() {
  //const [authUser, setAuthUser] = useState();
  
  return (
    <AuthProvider>
      <Router>
          <div className="app">
          {/*<DevNavBar />*/}
          <PrivateRoute exact path="/" component={Main} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute path="/main" component={Main} />
          <Route path="/signup" component={Signup} />
          <Route path="/signed-up" component={SignedUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/logout" component={Logout} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
