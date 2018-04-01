import React from 'react';
import PT from 'prop-types';

const VoteButton = props => {
  const triggerVote = event => {
    const voteType = props.voteType;

    props.vote(event, voteType);
  };
  const iconType = props.voteType === 'up' ? 'fa-arrow-alt-circle-up' : 'fa-arrow-alt-circle-down';
  return (
    <button
      className={`vote-btn vote-btn-${props.voteType}`}
      onClick={triggerVote}
      disabled={props.activeState}
      aria-label={`vote ${props.voteType}`}
    >
      <i className={`fa ${iconType} icon is-medium`} />
    </button>
  );
};

VoteButton.propTypes = {
  vote: PT.func.isRequired,
  activeState: PT.bool.isRequired,
  voteType: PT.string.isRequired
};

export default VoteButton;
