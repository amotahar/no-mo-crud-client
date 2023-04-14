import React, { useState } from 'react';

const AddUsers = () => {
  const [user, setUser] =useState({});
  const handleAddUser = event => {
          event.preventDefault();
          console.log(user);
  }
  const handleInputBlur = event => {
  const value = event.target.value;
  const field = event.target.name;
  const newUser = {...user};
  newUser[field] = value;
  setUser(newUser);
     
  }
  return (
    <div>
      <h2>Please add a User</h2>
        <form action="" onSubmit={handleAddUser}>
              <input onBlur={handleInputBlur} type="name" name="name" id="" placeholder="name" /> <br />
              <input  onBlur={handleInputBlur} type="email" name="email" id="" placeholder="email" /> <br />
              <button type='submit'>Add User</button>
        </form>
    </div>
  );
};

export default AddUsers;