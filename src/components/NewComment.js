import React, { Component } from 'react';
import { controlledFormInput } from '../stateUpdaters';
import PT from 'prop-types';

class NewComment extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    event.preventDefault();
    const newComment = event.target.value;
    const newState = controlledFormInput(this.state, 'comment', newComment);

    this.setState(newState);
  };

  handleSubmit = event => {
    event.preventDefault();
    const comment = this.state;
    const { articleId } = this.props;
    const newState = controlledFormInput(this.state, 'comment', '');

    this.setState(newState);
    this.props.handleNewComment(articleId, comment);
  };

  render() {
    return (
      <form className="comment__newComment" onSubmit={this.handleSubmit}>
        <textarea
          type="text"
          autoFocus
          placeholder="Join the conversation"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

NewComment.propTypes = {
  articleId: PT.string,
  handleNewComment: PT.func.isRequired
};

export default NewComment;
