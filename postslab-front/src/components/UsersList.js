import React from 'react';
import './UsersList.css';

function UsersList() {
  
  return (
    <div className="userslist">
      <div className="userslist__header">
        <h1> Users </h1>
      </div>
      <div className="userslist__content">
        <div className="userslist__content__item">
          Sample1
        </div>
        <div className="userslist__content__item">
          Sample2
        </div>
      </div>
    </div>
  );
}

export default UsersList;