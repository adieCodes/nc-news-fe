import React, { Component } from 'react';
import { controlledFormInput } from '../stateUpdaters';

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

  render() {
    return (
      <form className="comment__newComment">
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

export default NewComment;
