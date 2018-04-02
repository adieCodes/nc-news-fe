import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { unixTimeStampToString } from '../helpers/timeHelpers';
import { localVoteStateValidator } from '../stateUpdaters';

import VoteButton from './VoteButton';

class CommentCard extends Component {
  state = {
    voteChangedBy: 0,
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  vote = (event, voteType) => {
    const commentId = this.props.comment._id;
    const newState = localVoteStateValidator(this.state, voteType);

    this.setState(newState);
    this.props.handleVote('comments', commentId, voteType);
  };

  delete = event => {
    const commentId = this.props.comment._id;
    this.props.deleteComment(commentId);
  };

  render() {
    const isNorthcoder = this.props.comment.created_by === 'northcoder';
    const content = this.props.comment.body;
    const author = this.props.comment.created_by;

    return (
      <div className="comment">
        <div className="card">
          <div className="card-content">
            <p className="comment-body">{content}</p>
            <div className="comment-metaData media-content">
              <span className="subtitle is-6 comment-subtitle">
                <Link to={`/users/${author}`}>@{author}</Link>
              </span>
              <time className="comment-time" dateTime={this.props.comment.created_at}>
                {unixTimeStampToString(this.props.comment.created_at)}
              </time>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <VoteButton vote={this.vote} voteType="up" activeState={this.state.voteUpDisabled} />
            </div>
            <div className="card-footer-item">
              <span aria-label="vote count">{this.props.comment.votes}</span>
            </div>
            <div className="card-footer-item">
              <VoteButton
                vote={this.vote}
                voteType="down"
                activeState={this.state.voteDownDisabled}
              />
            </div>
            {isNorthcoder && (
              <div className="card-footer-item">
                <button className="delete-btn" onClick={this.delete} aria-label="delete comment">
                  <i className="fa fa-trash icon is-medium" />
                </button>
              </div>
            )}
          </div>
        </div>
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
