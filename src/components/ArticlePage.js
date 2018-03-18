import React from 'react';
import PT from 'prop-types';

const ArticlePage = props => {
  return (
    <div className="articlePage">
      <h1>{props.article.title}</h1>
    </div>
  );
};

ArticlePage.propTypes = {
  article: PT.object.isRequired
};

export default ArticlePage;
