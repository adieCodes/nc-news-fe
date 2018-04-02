import React from 'react';
import PT from 'prop-types';
import ArticleList from '../components/ArticleList';

const UserPage = props => (
  <div className="userPage container">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-center">
            <img src={props.userData.avatar_url} alt={`profile shot for ${props.userData.name}`} />
          </div>
          <div className="media-content">
            <p className="title userPage-title">{props.userData.name}</p>
            <p className="subtitle is-6 userPage-subtitle">@{props.userData.username}</p>
            <a href="#articles">
              <p>
                <strong>{props.userArticles.length}</strong> Articles
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="articleList" id="articles">
      <ArticleList articles={props.userArticles} votingActive={false} />;
    </div>
  </div>
);

UserPage.propTypes = {
  userData: PT.object.isRequired,
  userArticles: PT.array.isRequired,
  userComments: PT.array.isRequired
};

export default UserPage;
