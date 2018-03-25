import React, { Component } from 'react';
import { getAllArticles } from '../api';
import ArticleList from '../components/ArticleList';
import { articleVote } from '../stateUpdaters';

class ArticleListContainer extends Component {
  state = { articles: [], location: '' };

  fetchArticles(topicRequest) {
    getAllArticles(topicRequest).then(res =>
      this.setState({ articles: res.articles, location: this.props.location })
    );
  }

  componentDidMount() {
    const newTopicId = this.props.match.params.topicId;
    const requestAllArticles = !newTopicId;
    const topicRequest = requestAllArticles ? '' : newTopicId;

    this.fetchArticles(topicRequest);
  }

  componentWillReceiveProps(nextProps) {
    const newUrl = nextProps.location.pathname;
    const existingUrl = this.props.location;
    const newTopicId = nextProps.match.params.topicId;
    const requestAllArticles = !newTopicId;

    const topicRequest = requestAllArticles ? '' : newTopicId;

    if (newUrl !== existingUrl) this.fetchArticles(topicRequest);
  }

  render() {
    return <ArticleList articles={this.state.articles} />;
  }
}

export default ArticleListContainer;
