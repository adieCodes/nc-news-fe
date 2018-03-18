import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = props => {
  return (
    <div className="articleList">
      <h1>Article List</h1>
      {props.articles.map(article => <ArticleCard article={article} key={article._id} />)}
    </div>
  );
};

export default ArticleList;
