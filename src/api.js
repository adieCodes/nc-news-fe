import config from './config';
const API_URL = config.API_URL.dev;

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

export { getAllArticles, getArticleById, getTopics };
