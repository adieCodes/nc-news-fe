import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleListContainer from './containers/ArticleListContainer';
import ArticlePage from './components/ArticlePage';
import UserList from './components/UserList';
import UserPage from './components/UserPage';
import NoMatch from './components/NoMatch';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ArticleListContainer} />
    <Route exact path="/topics/:topicId" component={ArticleListContainer} />
    <Route exact path="/topics/:topicId/:articleId" component={ArticlePage} />
    <Route exact path="/users/" component={UserList} />
    <Route exact path="/users/:userId" component={UserPage} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
