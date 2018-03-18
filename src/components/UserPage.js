import React from 'react';

const UserPage = props => (
  <div className="userPage">
    <h1>{props.user.name}</h1>
  </div>
);

export default UserPage;
