import React from 'react';
import PT from 'prop-types';

const UserPage = props => (
  <div className="userPage">
    <h1>{props.user.name}</h1>
    <img src={props.user.avatar_url} alt={`profile shot for ${props.user.name}`} />
  </div>
);

UserPage.propTypes = {
  user: PT.object.isRequired
};

export default UserPage;
