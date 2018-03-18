import React, { Component } from 'react';
import { getAllArticles } from '../api';
import ArticleList from '../components/ArticleList';

class ArticleListContainer extends Component {
  state = { articles: [], location: '' };

  fetchArticles() {
    const topicRequest = !this.props.match.params.topicId ? '' : this.props.match.params.topicId;
    getAllArticles(topicRequest).then(res =>
      this.setState({ articles: res.articles, location: this.props.location })
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) this.fetchArticles();
  }

  render() {
    return <ArticleList articles={this.state.articles} />;
  }
}

export default ArticleListContainer;
