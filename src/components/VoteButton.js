import React from 'react';
import PT from 'prop-types';

const VoteButton = props => {
  const triggerVote = event => {
    const voteType = props.voteType;

    props.vote(event, voteType);
  };
  return (
    <button onClick={triggerVote} disabled={props.activeState}>
      {props.voteType}
    </button>
  );
};

VoteButton.propTypes = {
  vote: PT.func.isRequired,
  activeState: PT.bool.isRequired,
  voteType: PT.string.isRequired
};

export default VoteButton;
