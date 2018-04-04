import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from './Icon';

import CommentList from './CommentList';
import VoteButton from './VoteButton';
import { localVoteStateValidator } from '../stateUpdaters';

class ArticlePage extends Component {
  state = {
    voteChangedBy: 0,
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  vote = (event, voteType) => {
    const articleId = this.props.article._id;
    const newState = localVoteStateValidator(this.state, voteType);

    this.setState(newState);
    this.props.handleVote('article', articleId, voteType);
  };

  render() {
    const topic = this.props.article.belongs_to;
    const { title } = this.props.article;
    const author = this.props.article.created_by;
    const content = this.props.article.body;

    return (
      <div className="articlePage container column is-two-thirds">
        <article className="article">
          <div className={`container card ${this.props.article.belongs_to}`}>
            <div className="card-content">
              <div className="media">
                <div className="media-center">
                  <Link to={`/topics/${topic}`}>
                    <Icon iconName={topic} />
                  </Link>
                </div>
                <div className="media-content">
                  <p className="title article-title">{title}</p>
                  <p className="subtitle is-6 article-subtitle">
                    <Link to={`/users/${author}`}>@{author}</Link>
                  </p>
                </div>
              </div>
              <div className="content article-body">
                <p>{content}</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-item">
                <VoteButton
                  vote={this.vote}
                  voteType="up"
                  activeState={this.state.voteUpDisabled}
                />
              </div>
              <div className="card-footer-item">
                <span>{this.props.article.votes}</span>
              </div>
              <div className="card-footer-item">
                <VoteButton
                  vote={this.vote}
                  voteType="down"
                  activeState={this.state.voteDownDisabled}
                />
              </div>
            </div>
          </div>
        </article>
        <div className="comments">
          {this.props.commentsLoaded && (
            <CommentList
              articleId={this.props.article._id}
              comments={this.props.comments}
              handleNewComment={this.props.handleNewComment}
              handleVote={this.props.handleVote}
              deleteComment={this.props.deleteComment}
            />
          )}
        </div>
      </div>
    );
  }
}

ArticlePage.propTypes = {
  article: PT.object.isRequired,
  comments: PT.array.isRequired,
  commentsLoaded: PT.bool.isRequired,
  handleVote: PT.func.isRequired,
  handleNewComment: PT.func.isRequired,
  deleteComment: PT.func.isRequired
};

export default ArticlePage;
