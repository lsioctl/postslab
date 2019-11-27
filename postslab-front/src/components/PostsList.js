import React, { useState, useEffect } from 'react';
import { Error } from './AuthForm';
import postService from '../services/postService';

function PostsList() {
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint points to the fact that effect callbacks are synchronous to avoide race condition
    // so we have to add this boilerplate
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
    fetchPosts();
  }, []);


  return (
    <div className="Home">
     Here are the raw posts: 
     <ul>
          {posts.map(item => (
            <li key={item.id}>
              {item.user}: {item.body}
            </li>
          ))}
        </ul>
     { isError && <Error>Something went wrong with your credentials</Error> }
    </div>
  );
};

export default PostsList;
