import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

import CommentCard from './CommentCard';

const ArticlePage = props => {
  return (
    <div className="articlePage">
      <h1>{props.article.title}</h1>
      <Link to={`/topics/${props.article.belongs_to}`}>{props.article.belongs_to}</Link>
      <Link to={`/users/${props.article.created_by}`}>{props.article.created_by}</Link>
      <div class="article-card__voting-buttons">
        <Link to={'#'}>Up</Link>
        <span>{props.article.votes}</span>
        <Link to={'#'}>Down</Link>
      </div>
      <article className="article">{props.article.body}</article>
      {props.comments.map(comment => <CommentCard comment={comment} />)}
    </div>
  );
};

ArticlePage.propTypes = {
  article: PT.object.isRequired,
  comments: PT.array.isRequired
};

export default ArticlePage;
