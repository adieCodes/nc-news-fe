import React, { Component, Fragment } from 'react';
import PT from 'prop-types';
import { getUser } from '../api';
import UserPage from '../components/UserPage';
import Loading from '../components/Loading';

class UserPageContainer extends Component {
  state = {
    userData: {},
    userArticles: [],
    userComments: [],
    loading: true
  };

  componentDidMount() {
    const { userName } = this.props.match.params;
    getUser(userName).then(res => {
      this.setState({
        userData: res.userData,
        userArticles: res.userArticles,
        userComments: res.userComments,
        loading: false
      });
    });
  }

  render() {
    const isLoading = this.state.loading;
    return (
      <Fragment>
        {isLoading ? (
          <Loading />
        ) : (
          <UserPage
            userData={this.state.userData}
            userArticles={this.state.userArticles}
            userComments={this.state.userComments}
          />
        )}
      </Fragment>
    );
  }
}

UserPageContainer.propTypes = {
  match: PT.object.isRequired
};

export default UserPageContainer;
