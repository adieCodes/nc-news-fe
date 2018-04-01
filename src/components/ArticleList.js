import React from 'react';
import ArticleCard from './ArticleCard';
import PT from 'prop-types';

const ArticleList = props => (
  <div className="articleList container">
    {props.articles.map(article => (
      <ArticleCard article={article} key={article._id} handleVote={props.handleVote} />
    ))}
  </div>
);

ArticleList.propTypes = {
  articles: PT.array.isRequired,
  handleVote: PT.func.isRequired
};

export default ArticleList;
