import React from 'react';
import UserItems from './UserItems.jsx';

const User = (props) => {
  return (
    <div>
        <p>Your top 9!</p>
        <>
          {props.userTopNine.map((topItem, i) => {
            return(
            <UserItems key={i} userItem={topItem} />
          )})}
        </>
    </div>
  );
};

export default User;