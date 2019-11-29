import React, { useState, useEffect } from 'react';
import './PostMain.css';
import { Error } from './AuthForm';
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

  // we want to fetch only at the first render,
  // so we tell useEffect, there is no dependencies
  // to avoid inifinte loops
  // no dependencies: no need to run the effect if anything
  // changes
  useEffect(() => {
    fetchPosts();
  }, []);
    
  return (
    <div className="postmain">
      <div className="postmain__header">
          <h1> Posts </h1>
      </div>
      <div className="postmain__background"></div>
      <div className="postmain__messages">
        <PostsList posts={posts} />
      </div>
      <div className="postmain__footer">
        <PostForm fetchPosts={fetchPosts}/>
      </div>
      { isError && <Error>Something went wrong fetching the posts</Error> }
    </div>
  );
}

export default PostMain;
