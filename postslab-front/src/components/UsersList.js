import React, { useState, useEffect } from 'react';
import './UsersList.css';
import { Error } from './AuthForm';
import userService from '../services/userService';

function UsersList() {
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const json = await userService.list();
      setUsers(json);
    } 
    catch (error) {
      setIsError(true);
      console.log(error);
    };
  };

  // we want to fetch only at the first render,
  // so we tell useEffect, there is no dependencies
  // to avoid inifinte loops
  // no dependencies: no need to run the effect if anything
  // changes
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <div className="userslist">
      <div className="userslist__header">
        <h1> Users </h1>
      </div>
      <ul className="userslist__content">
        {users.map(item => (
          <li className="userslist__content__item" key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;