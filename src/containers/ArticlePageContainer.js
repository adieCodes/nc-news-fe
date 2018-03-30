import React, { Component, Fragment } from 'react';
import {
  getArticleById,
  getCommentsByArticle,
  updateArticleVote,
  updateCommentVote,
  addComment
} from '../api';
import ArticlePage from '../components/ArticlePage';
import Loading from '../components/Loading';
import { collectionVote } from '../stateUpdaters';

class ArticlePageContainer extends Component {
  state = { article: {}, comments: [], articleLoading: true, commentsLoading: true };

  componentDidMount() {
    const articleId = this.props.match.params.articleId;
    getArticleById(articleId).then(res =>
      this.setState({ article: res.article, articleLoading: false })
    );
    getCommentsByArticle(articleId).then(res =>
      this.setState({ comments: res.comments, commentsLoading: false })
    );
  }

  handleVote = (collection, id, voteType) => {
    const subState = this.state[collection];
    const newArticles = collectionVote(subState, id, voteType);

    this.setState({ [collection]: newArticles });
    if (collection === 'article') return updateArticleVote(id, voteType);
    if (collection === 'comments') return updateCommentVote(id, voteType);
  };

  handleNewComment = (articleId, comment) => {
    return addComment(articleId, comment).then(res => this.setState({ comments: res.comments }));
  };

  render() {
    const articleLoading = this.state.articleLoading;
    console.log(articleLoading);
    return (
      <Fragment>
        {articleLoading ? (
          <Loading />
        ) : (
          <ArticlePage
            article={this.state.article}
            articleLoading={!this.state.articlesLoading}
            comments={this.state.comments}
            commentsLoaded={!this.state.commentsLoading}
            handleVote={this.handleVote}
            handleNewComment={this.handleNewComment}
          />
        )}
      </Fragment>
    );
  }
}

export default ArticlePageContainer;
