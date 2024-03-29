import React, { useState, useEffect } from 'react';
import './PostMain.css';
import { Link, Redirect } from 'react-router-dom';
import { Card, Form, Input, Button, Error } from './AuthForm';
import PostsList from './PostsList';
import PostForm from './PostForm';
import postService from '../services/postService';


function PostMain() {
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const json = await postService.list();
      setPosts(json);
    } 
    catch (error) {
      setIsError(true);
      console.log(error);
    };
  };

  // TODO: really understand better useEffect
  // if we miss the [], it loops for ever has
  // state changes, so new render, so state changes ...
  useEffect(() => {
    fetchPosts();
  }, []);
    
  return (
    <div className="postmain">
      <div class="postmain__header">
          <h1> Posts </h1>
      </div>
      <div class="postmain__background"></div>
      <div class="postmain__messages">
        <PostsList posts={posts} />
      </div>
      <div class="postmain__footer">
        <PostForm fetchPosts={fetchPosts}/>
      </div>
      { isError && <Error>Something went wrong fetching the posts</Error> }
    </div>
  );
}

export default PostMain;
