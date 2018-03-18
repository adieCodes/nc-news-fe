import React from 'react';
import ArticleCard from './ArticleCard';
import PT from 'prop-types';

const ArticleList = props => {
  return (
    <div className="articleList">
      <h1>Article List</h1>
      {props.articles.map(article => <ArticleCard article={article} key={article._id} />)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PT.array.isRequired
};

export default ArticleList;
