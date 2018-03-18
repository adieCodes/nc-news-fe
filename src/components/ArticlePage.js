import React, { Component } from 'react';
import { getArticleById } from '../api';

class ArticlePage extends Component {
  state = { article: {} };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    getArticleById(articleId).then(res => this.setState({ article: res.article }));
  }

  render() {
    return <h1>Article Page</h1>;
  }
}

export default ArticlePage;
