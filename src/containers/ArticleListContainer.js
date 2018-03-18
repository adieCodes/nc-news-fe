import React, { Component } from 'react';
import { getAllArticles } from '../api';
import { ArticleList } from '../components/ArticleList';

class ArticleList extends Component {
  state = { articles: [] };

  componentDidMount() {
    const topicRequest = !this.props.match.params.topicId ? '' : this.props.match.params.topicId;
    getAllArticles(topicRequest).then(res => this.setState({ articles: res.articles }));
  }

  render() {
    return <ArticleList />;
  }
}

export default ArticleList;
