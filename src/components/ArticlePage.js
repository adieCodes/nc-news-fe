import React from 'react';

const ArticlePage = props => {
  return (
    <div className="articlePage">
      <h1>{props.article.title}</h1>
    </div>
  );
};

export default ArticlePage;
