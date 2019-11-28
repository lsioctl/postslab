import React from 'react';
import './Main.css';
import PostMain from './PostMain';
import UsersList from './UsersList';


function Main() {
  
  return (
    <div className="main">
      <UsersList />
      <PostMain />
    </div>
  );
}

export default Main;
