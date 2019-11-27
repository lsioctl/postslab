import React from 'react';

function PostsList(props) {
  return (
    <div className="Home"> 
     <ul>
          {props.posts && props.posts.map(item => (
            <li key={item.id}>
              {item.user}: {item.body}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default PostsList;
