import React, { useState } from 'react';

const AddUsers = () => {
  const [user, setUser] =useState({});
  const handleAddUser = event => {
          event.preventDefault();
  }
  return (
    <div>
      <h2>Please add a User</h2>
        <form action="" onSubmit={handleAddUser}>
              <input type="name" name="name" id="" placeholder="name" /> <br />
              <input type="email" name="email" id="" placeholder="email" /> <br />
              <button type='submit'>Add User</button>
        </form>
    </div>
  );
};

export default AddUsers;