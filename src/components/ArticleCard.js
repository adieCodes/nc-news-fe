import React from 'react';
import PT from 'prop-types';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <h2>{props.article.title}</h2>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PT.object.isRequired
};

export default ArticleCard;
