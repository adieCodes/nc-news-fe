import React from 'react';
import CommentCard from './CommentCard';
import NewComment from './NewComment';
import PT from 'prop-types';

const CommentList = props => {
  return (
    <div className="commentList">
      <NewComment handleNewComment={props.handleNewComment} articleId={props.articleId} />
      {props.comments.map(comment => <CommentCard comment={comment} key={comment._id} />)}
    </div>
  );
};

CommentList.propTypes = {
  articleId: PT.string,
  comments: PT.array.isRequired,
  handleNewComment: PT.func.isRequired
};

export default CommentList;
