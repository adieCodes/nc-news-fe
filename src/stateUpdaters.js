const articleVote = (articles, articleId, voteType) => {
  if (!/^down$|^up$/.test(voteType)) return articles.slice(0);
  const voteValue = voteType === 'up' ? 1 : -1;
  return articles.map(article => {
    if (article._id === articleId) {
      return Object.assign({}, article, { votes: article.votes + voteValue });
    } else return article;
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

export { articleVote, limitVote };
