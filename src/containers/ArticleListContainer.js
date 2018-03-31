import React, { Component, Fragment } from 'react';
import PT from 'prop-types';
import { getAllArticles, updateArticleVote } from '../api';
import ArticleList from '../components/ArticleList';
import Loading from '../components/Loading';
import { collectionVote } from '../stateUpdaters';

class ArticleListContainer extends Component {
  state = { articles: [], location: '', loading: true };

  fetchArticles(topicRequest) {
    getAllArticles(topicRequest).then(res =>
      this.setState({ articles: res.articles, location: this.props.location, loading: false })
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

  handleVote = (articleId, voteType) => {
    const { articles } = this.state;
    const newArticles = collectionVote(articles, articleId, voteType);

    this.setState({ articles: newArticles });
    updateArticleVote(articleId, voteType);
  };

  render() {
    const isLoading = this.state.loading;
    return (
      <Fragment>
        {isLoading ? (
          <Loading />
        ) : (
          <ArticleList articles={this.state.articles} handleVote={this.handleVote} />
        )}
      </Fragment>
    );
  }
}

ArticleListContainer.propTypes = {
  location: PT.object.isRequired,
  match: PT.object.isRequired
};

export default ArticleListContainer;
