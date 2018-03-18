import React, { Component } from 'react';
import { getArticleById, getCommentsByArticle } from '../api';

class ArticlePage extends Component {
  state = { article: {}, comments: [] };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    getArticleById(articleId).then(res => this.setState({ article: res.article }));
    getCommentsByArticle(articleId).then(res => this.setState({ comments: res.comments }));
  }

  render() {
    return (
      <div>
        <h1>Article Page</h1>
      </div>
    );
  }
}

export default ArticlePage;
