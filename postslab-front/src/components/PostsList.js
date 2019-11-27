import React, { useEffect, useRef } from 'react';
import './PostsList.css';

function PostsList(props) {
  // This is to scroll to the last post
  const postsEndRef = useRef(null)

  function scrollToBottom() {
    postsEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [props.posts]);

  return (
    <div className="postslist">
      <ul className="postslist__list">
        {props.posts && props.posts.map(item => (
          <li className="postslist__list__item" key={item.id}>
            <div className="postslist__list__item__message">
              <div className="postslist__list__item__message__header">
                {item.user}
              </div>
              <div className="postslist__list__item__message__content">
                {item.body}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div ref={postsEndRef} />
    </div>
  );
};

export default PostsList;
