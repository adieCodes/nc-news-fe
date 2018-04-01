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
      <form className="comment-form card" onSubmit={this.handleSubmit}>
        <div className="is-horizontal field">
          <div className="field-label is-normal">
            <label className="label">Add comment</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  type="text"
                  autoFocus
                  placeholder="Join the conversation"
                  onChange={this.handleChange}
                  value={this.state.comment}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">{/*  left empty for spacing */}</div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-black" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

NewComment.propTypes = {
  articleId: PT.string,
  handleNewComment: PT.func.isRequired
};

export default NewComment;
