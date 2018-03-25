import React, { Component } from 'react';
import { getArticleById, getCommentsByArticle } from '../api';
import ArticlePage from '../components/ArticlePage';

import { articleVote } from '../stateUpdaters';

class ArticlePageContainer extends Component {
  state = { article: {}, comments: [] };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    getArticleById(articleId).then(res => this.setState({ article: res.article }));
    getCommentsByArticle(articleId).then(res => this.setState({ comments: res.comments }));
  }

  handleVote = (articleId, voteType) => {
    const { article } = this.state;
    const newArticles = articleVote(article, articleId, voteType);

    this.setState({ article: newArticles });
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
