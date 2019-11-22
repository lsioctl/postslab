import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import { AuthContext } from './contexts/auth'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>

          <hr />

          <PrivateRoute exact path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
