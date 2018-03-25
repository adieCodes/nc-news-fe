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
    return (
      <div className="article-card">
        <h2>
          <Link to={`/topics/${this.props.article.belongs_to}/${this.props.article._id}`}>
            {this.props.article.title}
          </Link>
        </h2>
        <Link to={`/topics/${this.props.article.belongs_to}`}>{this.props.article.belongs_to}</Link>
        <Link to={`/users/${this.props.article.created_by}`}>{this.props.article.created_by}</Link>
        <div className="article-card__voting-buttons">
          <VoteButton vote={this.vote} voteType="up" activeState={this.state.voteUpDisabled} />
          <span>{this.props.article.votes}</span>
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
