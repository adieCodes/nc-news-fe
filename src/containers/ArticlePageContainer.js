import React, { Component } from 'react';
import { getArticleById, getCommentsByArticle } from '../api';
import ArticlePage from '../components/ArticlePage';

class ArticlePageContainer extends Component {
  state = { article: {}, comments: [] };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    getArticleById(articleId).then(res => this.setState({ article: res.article }));
    getCommentsByArticle(articleId).then(res => this.setState({ comments: res.comments }));
  }

  render() {
    return <ArticlePage article={this.state.article} />;
  }
}

export default ArticlePageContainer;
