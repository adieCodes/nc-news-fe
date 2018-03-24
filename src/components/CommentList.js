import React from 'react';
import CommentCard from './ArticleCard';
import PT from 'prop-types';

const CommentList = props => {
  return (
    <div className="commentList">
      {props.articles.map(comment => <CommentCard comment={comment} key={comment._id} />)}
    </div>
  );
};

ArticleList.propTypes = {
  comments: PT.array.isRequired
};

export default ArticleList;
