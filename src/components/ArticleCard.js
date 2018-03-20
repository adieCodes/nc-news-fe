import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <h2>
        <Link to={`/topics/${props.article.belongs_to}/${props.article._id}`}>
          {props.article.title}
        </Link>
      </h2>
      <Link to={`/topics/${props.article.belongs_to}`}>{props.article.belongs_to}</Link>
      <Link to={`/users/${props.article.created_by}`}>{props.article.created_by}</Link>
      <div class="article-card__voting-buttons">
        <Link to={'#'}>Up</Link>
        <span>{props.article.votes}</span>
        <Link to={'#'}>Down</Link>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PT.object.isRequired
};

export default ArticleCard;
