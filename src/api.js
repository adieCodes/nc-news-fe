const API_URL = process.env.REACT_APP_API_URL;

const getAllArticles = (topic = '') => {
  const reqUrl = topic === '' ? `${API_URL}/articles` : `${API_URL}/topics/${topic}/articles`;
  return fetch(reqUrl).then(res => {
    return res.json();
  });
};

const getArticleById = articleId => {
  return fetch(`${API_URL}/articles/${articleId}`).then(res => {
    return res.json();
  });
};

const getTopics = () => {
  return fetch(`${API_URL}/topics`).then(res => res.json());
};

const getCommentsByArticle = articleId => {
  return fetch(`${API_URL}/articles/${articleId}/comments`).then(res => res.json());
};

const getUser = userName => {
  return fetch(`${API_URL}/users/${userName}`).then(res => res.json());
};

const updateArticleVote = (articleId, voteType) => {
  return fetch(`${API_URL}/articles/${articleId}?vote=${voteType}`, { method: 'PUT' }).then(res =>
    res.json()
  );
};

const updateCommentVote = (commentId, voteType) => {
  return fetch(`${API_URL}/comments/${commentId}?vote=${voteType}`, { method: 'PUT' }).then(res =>
    res.json()
  );
};

export {
  getAllArticles,
  getArticleById,
  getTopics,
  getCommentsByArticle,
  getUser,
  updateArticleVote,
  updateCommentVote
};
