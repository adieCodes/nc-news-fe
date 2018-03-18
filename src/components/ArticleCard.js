import React from 'react';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <h2>{props.article.title}</h2>
    </div>
  );
};

export default ArticleCard;
