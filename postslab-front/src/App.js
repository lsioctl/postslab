import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import SignedUp from './components/SignedUp';
import Logout from './components/Logout';
import PostMain from './components/PostMain';

import { AuthContext } from './contexts/auth'
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [authUser, setAuthUser] = useState();
  
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            {/*those will be contextual*/}
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/logout">logout</Link>
            </li>
            <li>
              <Link to="/posts-main">posts main</Link>
            </li>
          </ul>

          <hr />

          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute path="/posts-main" component={PostMain} />
          <Route path="/signup" component={Signup} />
          <Route path="/signed-up" component={SignedUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/logout" component={Logout} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
