import React, { useState } from 'react';
import './PostForm.css';
import { Error } from './AuthForm';
import postService from '../services/postService';


function PostForm(props) {
  const [isError, setIsError] = useState(false);
  const [postBody, setPostBody] = useState('');

  async function postPost(e) {
    // Prevent the form to reload the page
    e.preventDefault();
    // TODO not sure this one is needed 
    e.stopPropagation();
    try {
      await postService.post(postBody);
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

  function handleChange(e) {
    setPostBody(e.target.value);
  }

  async function handleKeyUp(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      await postPost(e);
    };
  };

  return (
    <div className="postform">
      <form className="postform__form">
        <textarea className="postform__form__input"
          autoFocus="true"
          type="textarea"
          value={postBody}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder="type your message here ..."
        />
      </form>
      { isError && <Error>An error occured when sending the post</Error> }
    </div>
  );
}
                    
export default PostForm;
