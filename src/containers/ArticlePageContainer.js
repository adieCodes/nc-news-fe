import React, { Component, Fragment } from 'react';
import {
  getArticleById,
  getCommentsByArticle,
  updateArticleVote,
  updateCommentVote,
  addComment,
  deleteCommentFromApi
} from '../api';
import ArticlePage from '../components/ArticlePage';
import Loading from '../components/Loading';
import { collectionVote, removeCommentFromState } from '../stateUpdaters';

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

  handleNewComment = (articleId, comment) =>
    addComment(articleId, comment).then(res => this.setState({ comments: res.comments }));

  deleteComment = commentId => {
    const { comments } = this.state;
    const updatedComments = removeCommentFromState(comments, commentId);

    this.setState({ comments: updatedComments });
    deleteCommentFromApi(commentId);
  };

  render() {
    const articleLoading = this.state.articleLoading;

    return (
      <Fragment>
        {articleLoading ? (
          <Loading />
        ) : (
          <ArticlePage
            article={this.state.article}
            comments={this.state.comments}
            commentsLoaded={!this.state.commentsLoading}
            handleVote={this.handleVote}
            handleNewComment={this.handleNewComment}
            deleteComment={this.deleteComment}
          />
        )}
      </Fragment>
    );
  }
}

export default ArticlePageContainer;
