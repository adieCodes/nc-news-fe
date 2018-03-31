const API_URL = process.env.REACT_APP_API_URL;

const getAllArticles = (topic = '') => {
  const reqUrl = topic === '' ? `${API_URL}/articles` : `${API_URL}/topics/${topic}/articles`;
  return fetch(reqUrl).then(res => res.json());
};

const getArticleById = articleId =>
  fetch(`${API_URL}/articles/${articleId}`).then(res => res.json());

const getTopics = () => fetch(`${API_URL}/topics`).then(res => res.json());

const getCommentsByArticle = articleId =>
  fetch(`${API_URL}/articles/${articleId}/comments`).then(res => res.json());

const getUser = userName => fetch(`${API_URL}/users/${userName}`).then(res => res.json());

const updateArticleVote = (articleId, voteType) =>
  fetch(`${API_URL}/articles/${articleId}?vote=${voteType}`, { method: 'PUT' }).then(res =>
    res.json()
  );

const updateCommentVote = (commentId, voteType) =>
  fetch(`${API_URL}/comments/${commentId}?vote=${voteType}`, { method: 'PUT' }).then(res =>
    res.json()
  );

const addComment = (articleId, comment) =>
  fetch(`${API_URL}/articles/${articleId}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json());

const deleteCommentFromApi = commentId =>
  fetch(`${API_URL}/comments/${commentId}`, {
    method: 'DELETE'
  }).then(res => res.json());

export {
  getAllArticles,
  getArticleById,
  getTopics,
  getCommentsByArticle,
  getUser,
  updateArticleVote,
  updateCommentVote,
  addComment,
  deleteCommentFromApi
};
