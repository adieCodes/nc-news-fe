import React, { Component } from 'react';
import { getAllArticles } from '../api';
import ArticleList from '../components/ArticleList';

class ArticleListContainer extends Component {
  state = { articles: [], location: '' };

  fetchArticles(topicRequest) {
    getAllArticles(topicRequest).then(res =>
      this.setState({ articles: res.articles, location: this.props.location })
    );
  }

  componentDidMount() {
    const topicRequest = !this.props.match.params.topicId ? '' : this.props.match.params.topicId;
    this.fetchArticles(topicRequest);
  }

  componentWillReceiveProps(nextProps) {
    const topicRequest = !nextProps.match.params.topicId ? '' : nextProps.match.params.topicId;
    if (nextProps.location.pathname !== this.props.location) this.fetchArticles(topicRequest);
  }

  render() {
    return <ArticleList articles={this.state.articles} />;
  }
}

export default ArticleListContainer;
