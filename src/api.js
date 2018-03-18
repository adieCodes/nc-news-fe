import config from './config';
const API_URL = config.API_URL.dev;

const getAllArticles = (topic = '') => {
  const reqUrl = topic === '' ? `${API_URL}/articles` : `${API_URL}/topics/${topic}/articles`;
  return fetch(reqUrl).then(res => {
    return res.json();
  });
};

export { getAllArticles };
