import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import UserList from './components/UserList';
import UserPage from './components/UserPage';
import NoMatch from './components/NoMatch';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/topics/:topicId" component={ArticleList} />
    <Route exact path="/topics/:topicId/:articleId" component={ArticlePage} />
    <Route exact path="/users/" component={UserList} />
    <Route exact path="/users/:userId" component={UserPage} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
