import React, { Component } from 'react';
import { getArticleById, getCommentsByArticle, updateArticleVote, updateCommentVote } from '../api';
import ArticlePage from '../components/ArticlePage';

import { collectionVote } from '../stateUpdaters';

class ArticlePageContainer extends Component {
  state = { article: {}, comments: [] };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    getArticleById(articleId).then(res => this.setState({ article: res.article }));
    getCommentsByArticle(articleId).then(res => this.setState({ comments: res.comments }));
  }

  handleVote = (collection, id, voteType) => {
    const subState = this.state[collection];
    const newArticles = collectionVote(subState, id, voteType);

    this.setState({ [collection]: newArticles });
    if (collection === 'article') return updateArticleVote(id, voteType);
    if (collection === 'comments') return updateCommentVote(id, voteType);
  };

  render() {
    return (
      <ArticlePage
        article={this.state.article}
        comments={this.state.comments}
        handleVote={this.handleVote}
      />
    );
  }
}

export default ArticlePageContainer;
