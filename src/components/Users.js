import React from 'react';
import { User } from './User';

export const Users = ({ users }) => {
  return (
    <div className='wrapper'>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
