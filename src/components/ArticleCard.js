import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import VoteButton from './VoteButton';
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
      <div className="article card">
        <h2 className="content">
          <Link to={`/topics/${topic}/${articleId}`}>{articleTitle}</Link>
        </h2>
        <Link to={`/topics/${topic}`}>{topic}</Link>
        <Link to={`/users/${author}`}>{author}</Link>
        <div className="card-footer">
          <VoteButton vote={this.vote} voteType="up" activeState={this.state.voteUpDisabled} />
          <span>{voteCount}</span>
          <VoteButton vote={this.vote} voteType="down" activeState={this.state.voteDownDisabled} />
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
