import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { unixTimeStampToString } from '../helpers/timeHelpers';

const CommentCard = props => {
  return (
    <div className="comment-card">
      <p>{props.comment.body}</p>
      <p>
        <Link to={`/users/${props.comment.created_by}`}>{props.comment.created_by}</Link>
      </p>
      <p>{unixTimeStampToString(props.comment.created_at)}</p>
      <div className="article-card__voting-buttons">
        <Link to={'#'}>Up</Link>
        <span>{props.comment.votes}</span>
        <Link to={'#'}>Down</Link>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PT.object.isRequired
};

export default CommentCard;
