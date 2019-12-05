import React, { useState, useEffect } from 'react';
import './UsersList.css';
import { Error } from './AuthForm';
import userService from '../services/userService';
import defaultUserIcon from './default_user_icon.svg';

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
    // TODO: more elegant way instead of two lines ?
    fetchUsers();
    const int = setInterval(fetchUsers, 3000);
    // when the component unmount or re-render, it uses this:
    // it is to avoid having the fetch when the component is unmounted
    return function cleanup() {
      clearInterval(int);
    }
  }, []);
  
  return (
    <div className="userslist">
      <div className="userslist__header">
        <h1> Users </h1>
      </div>
      <ul className="userslist__content">
        {users.map(item => (
          <li className="userslist__content__item" key={item._id}>
            <div className="userslist__content__item__left">
              <div className="userslist__content__item__left__icon">
                <img src={defaultUserIcon} alt=""/>
              </div>
            </div>
            <div className="userslist__content__item__right">
              <div className="userslist__content__item__right__user">
                {item.name}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;