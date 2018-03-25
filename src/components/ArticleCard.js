import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleCard extends Component {
  state = {
    voteChange: 0,
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  voteUp = event => {
    const articleId = this.props.article._id;
    const newVoteChange = this.state.voteChange + 1;
    const blockVoteUp = newVoteChange > 0;
    const blockVoteDown = newVoteChange < 1;

    event.preventDefault();
    this.setState({
      voteChange: newVoteChange,
      voteUpDisabled: blockVoteUp,
      voteDownDisabled: blockVoteDown
    });
    return this.props.handleVote(articleId, 'up');
  };
  voteDown = event => {
    const articleId = this.props.article._id;
    const newVoteChange = this.state.voteChange - 1;
    const blockVoteUp = newVoteChange > 1;
    const blockVoteDown = newVoteChange < 0;

    event.preventDefault();

    this.setState({
      voteChange: newVoteChange,
      voteUpDisabled: blockVoteUp,
      voteDownDisabled: blockVoteDown
    });
    return this.props.handleVote(articleId, 'down');
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
          <button onClick={this.voteUp} disabled={this.state.voteUpDisabled}>
            Up
          </button>
          <span>{this.props.article.votes}</span>
          <button onClick={this.voteDown} disabled={this.state.voteDownDisabled}>
            Down
          </button>
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
