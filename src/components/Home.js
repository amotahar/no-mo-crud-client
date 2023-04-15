import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const users = useLoaderData();
  const handleDelete = user => {
    const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);
    console.log(agree);
    if( agree){
      console.log('deleting user id', user._id);
    }
    
  }
  return (
    <div>
      <h1>User: {users.length} </h1>
      {
        users.map(user => <p 
          key={user._id}
          >
          {user.name} {user.email} <button onclick={ ()=> handleDelete(user._id)}>X</button>

          </p> )
      }

    </div>
  );
};

export default Home;