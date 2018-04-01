import React from 'react';
import PT from 'prop-types';

const UserPage = props => (
  <div className="userPage container column is-two-thirds">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-center">
            <img src={props.user.avatar_url} alt={`profile shot for ${props.user.name}`} />
          </div>
          <div className="media-content">
            <p className="title userPage-title">{props.user.name}</p>
            <p className="subtitle is-6 userPage-subtitle">@{props.user.username}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserPage.propTypes = {
  user: PT.object.isRequired
};

export default UserPage;
