import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    const jsonPlaceholderApi = `https://jsonplaceholder.typicode.com/users`;

    axios.get(jsonPlaceholderApi).then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className='heading'>USERS LIST</h1>
      <Users users={users} />
    </>
  );
}

export default App;
