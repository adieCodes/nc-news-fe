const collectionVote = (collection, id, voteType) => {
  if (!/^down$|^up$/.test(voteType)) return collection.slice(0);
  const voteValue = voteType === 'up' ? 1 : -1;

  const singleArticle = !Array.isArray(collection);

  if (singleArticle) {
    return Object.assign({}, collection, { votes: collection.votes + voteValue });
  }

  return collection.map(item => {
    if (item._id === id) {
      return Object.assign({}, item, { votes: item.votes + voteValue });
    }
    return item;
  });
};

const limitVote = (state, voteType) => {
  const newVoteValue = voteType === 'up' ? 1 : -1;
  const newVoteCount = state.voteChangedBy + newVoteValue;
  const blockVotingUp = newVoteCount > 0;
  const blockVotingDown = newVoteCount < 0;

  const currentVoteDisablingString = `vote${voteType[0].toUpperCase()}${voteType
    .slice(1)
    .toLowerCase()}Disabled`;

  if (state[currentVoteDisablingString]) return state;

  return Object.assign({}, state, {
    voteChangedBy: newVoteCount,
    voteUpDisabled: blockVotingUp,
    voteDownDisabled: blockVotingDown
  });
};

const controlledCommentFormInput = (state, input) => {
  if (input === state.comment) return state;
  const isThereContent = input.length > 0;

  return Object.assign({}, state, { comment: input, formActive: isThereContent });
};

const removeCommentFromState = (commentState, commentId) =>
  commentState.filter(comment => comment._id !== commentId);

export { collectionVote, limitVote, controlledCommentFormInput, removeCommentFromState };
