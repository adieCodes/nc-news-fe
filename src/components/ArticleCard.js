import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import VoteButton from './VoteButton';

class ArticleCard extends Component {
  state = {
    voteChangedBy: 0,
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  vote = (event, voteType) => {
    const articleId = this.props.article._id;
    const newVoteValue = voteType === 'up' ? 1 : -1;
    const newVoteCount = this.state.voteChangedBy + newVoteValue;
    const blockVotingUp = newVoteCount > 0;
    const blockVotingDown = newVoteCount < 0;

    event.preventDefault();
    this.setState({
      voteChangedBy: newVoteCount,
      voteUpDisabled: blockVotingUp,
      voteDownDisabled: blockVotingDown
    });
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
