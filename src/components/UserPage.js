import React from 'react';
import PT from 'prop-types';

const UserPage = props => (
  <div className="userPage">
    <h1>{props.user.name}</h1>
  </div>
);

UserPage.propTypes = {
  user: PT.object.isRequired
};

export default UserPage;
