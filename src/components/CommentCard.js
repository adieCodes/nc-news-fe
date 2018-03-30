import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { unixTimeStampToString } from '../helpers/timeHelpers';
import { limitVote } from '../stateUpdaters';

import VoteButton from './VoteButton';

class CommentCard extends Component {
  state = {
    voteChangedBy: 0,
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  vote = (event, voteType) => {
    const commentId = this.props.comment._id;
    const newState = limitVote(this.state, voteType);

    this.setState(newState);
    this.props.handleVote('comments', commentId, voteType);
  };

  delete = event => {
    const commentId = this.props.comment._id;
    this.props.deleteComment(commentId);
  };

  render() {
    const isNorthcoder = this.props.comment.created_by === 'northcoder';
    return (
      <div className="comment-card">
        <p>{this.props.comment.body}</p>
        <p>
          <Link to={`/users/${this.props.comment.created_by}`}>
            {this.props.comment.created_by}
          </Link>
        </p>
        <p>{unixTimeStampToString(this.props.comment.created_at)}</p>
        <div className="article-card__voting-buttons">
          <VoteButton vote={this.vote} voteType="up" activeState={this.state.voteUpDisabled} />
          <span>{this.props.comment.votes}</span>
          <VoteButton vote={this.vote} voteType="down" activeState={this.state.voteDownDisabled} />
        </div>
        {isNorthcoder && <button onClick={this.delete}>Delete</button>}
      </div>
    );
  }
}

CommentCard.propTypes = {
  comment: PT.object.isRequired,
  handleVote: PT.func.isRequired,
  deleteComment: PT.func.isRequired
};

export default CommentCard;
