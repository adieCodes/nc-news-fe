const articleVote = (articles, articleId, voteType) => {
  if (!/^down$|^up$/.test(voteType)) return articles.slice(0);
  const voteValue = voteType === 'up' ? 1 : -1;
  return articles.map(article => {
    if (article._id === articleId) {
      return Object.assign({}, article, { votes: article.votes + voteValue });
    } else return article;
  });
};

export { articleVote };
