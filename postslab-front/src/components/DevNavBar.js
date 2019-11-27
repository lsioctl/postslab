import React from 'react';
import './DevNavBar.css';
import { Link } from "react-router-dom";

function DevNavBar() {
  return (
    <div className='devnavbar'>
      <h1> Development nav</h1>
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
    </div>
  )
};

export default DevNavBar;