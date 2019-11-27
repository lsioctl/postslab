import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Form, Input, Button, Error } from './AuthForm';
import postService from '../services/postService';
import { tsPropertySignature } from '@babel/types';


function PostForm(props) {
  const [isError, setIsError] = useState(false);
  const [postBody, setPostBody] = useState('');

  async function postPost(e) {
    // Prevent the form to reload the page
    e.preventDefault();
    // TODO not sure this one is needed 
    e.stopPropagation();
    try {
      const json = await postService.post(postBody);
    } 
    catch (error) {
      setIsError(true);
      console.log(error);
    };
    // reminder: synthetic events, can not do 
    // e.target.reset()
    // moreover is a controlled component, so do it the React way ;)
    props.fetchPosts();
    setPostBody('');
  };
  return (
    <div>
      <form onSubmit={postPost}>
        <Input
          type="text"
          value={postBody}
          onChange={e => {
            setPostBody(e.target.value);
          }}
          placeholder="type your message here ..."
        />
      </form>
      { isError && <Error>An error occured when sending the post</Error> }
    </div>
  );
}

export default PostForm;
