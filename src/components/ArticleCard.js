import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import VoteButton from './VoteButton';
import Icon from './Icon';
import { limitVote } from '../stateUpdaters';

class ArticleCard extends Component {
  state = {
    voteChangedBy: 0,
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  vote = (event, voteType) => {
    const articleId = this.props.article._id;
    const newState = limitVote(this.state, voteType);

    this.setState(newState);
    return this.props.handleVote(articleId, voteType);
  };

  render() {
    const topic = this.props.article.belongs_to;
    const articleId = this.props.article._id;
    const articleTitle = this.props.article.title;
    const author = this.props.article.created_by;
    const voteCount = this.props.article.votes;

    return (
      <div className="article column is-half">
        <div className="container card">
          <div className="card-content">
            <div className="media">
              <div className="media-center">
                <Link to={`/topics/${topic}`}>
                  <Icon iconName={topic} />
                </Link>
              </div>
              <div className="media-content has-text-centered">
                <p className="title article-title">
                  <Link to={`/topics/${topic}/${articleId}`}>{articleTitle}</Link>
                </p>
                <p className="subtitle is-6 article-subtitle">
                  <Link to={`/users/${author}`}>@{author}</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <VoteButton vote={this.vote} voteType="up" activeState={this.state.voteUpDisabled} />
            </div>
            <div className="card-footer-item">
              <span aria-label="vote count">{voteCount}</span>
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
      </div>
    );
  }
}

ArticleCard.propTypes = {
  article: PT.object.isRequired,
  handleVote: PT.func.isRequired
};

export default ArticleCard;
