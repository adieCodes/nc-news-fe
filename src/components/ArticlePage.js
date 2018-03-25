import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

import CommentCard from './CommentCard';
import VoteButton from './VoteButton';
import { limitVote } from '../stateUpdaters';

class ArticlePage extends Component {
  state = {
    voteChangedBy: 0,
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  vote = (event, voteType) => {
    const articleId = this.props.article._id;
    const newState = limitVote(this.state, voteType);

    this.setState(newState);
    this.props.handleVote('article', articleId, voteType);
  };

  render() {
    return (
      <div className="articlePage">
        <h1>{this.props.article.title}</h1>
        <Link to={`/topics/${this.props.article.belongs_to}`}>{this.props.article.belongs_to}</Link>
        <Link to={`/users/${this.props.article.created_by}`}>{this.props.article.created_by}</Link>
        <div className="article-card__voting-buttons">
          <VoteButton vote={this.vote} voteType="up" activeState={this.state.voteUpDisabled} />
          <span>{this.props.article.votes}</span>
          <VoteButton vote={this.vote} voteType="down" activeState={this.state.voteDownDisabled} />
        </div>
        <article className="article">{this.props.article.body}</article>
        {this.props.comments.map(comment => (
          <CommentCard comment={comment} key={comment._id} handleVote={this.props.handleVote} />
        ))}
      </div>
    );
  }
}

ArticlePage.propTypes = {
  article: PT.object.isRequired,
  comments: PT.array.isRequired,
  handleVote: PT.func.isRequired
};

export default ArticlePage;
