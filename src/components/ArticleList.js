import React from 'react';
import ArticleCard from './ArticleCard';
import PT from 'prop-types';

const ArticleList = props => (
  <div className="articleList container">
    <div className="columns is-multiline is-centered">
      {props.articles.map(article => (
        <ArticleCard
          article={article}
          key={article._id}
          handleVote={props.handleVote}
          votingActive={props.votingActive}
        />
      ))}
    </div>
  </div>
);

ArticleCard.defaultProps = {
  votingActive: true
};

ArticleList.propTypes = {
  articles: PT.array.isRequired,
  handleVote: PT.func.isRequired,
  votingActive: PT.bool
};

export default ArticleList;
