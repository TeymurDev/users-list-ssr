import React from 'react';

export const User = ({ user }) => {
  return (
    <div className='record'>
      <span className='mt'>Name: {user.name}</span>
      <span className='mt'>Username: {user.username}</span>
      <span className='mt'>Email: {user.email}</span>
    </div>
  );
};
