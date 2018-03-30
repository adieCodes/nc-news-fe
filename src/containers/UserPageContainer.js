import React, { Component, Fragment } from 'react';
import { getUser } from '../api';
import UserPage from '../components/UserPage';
import Loading from '../components/Loading';

class UserPageContainer extends Component {
  state = {
    user: {},
    loading: true
  };

  componentDidMount() {
    const { userName } = this.props.match.params;
    getUser(userName).then(res => this.setState({ user: res.user, loading: false }));
  }

  render() {
    const isLoading = this.state.loading;
    return <Fragment>{isLoading ? <Loading /> : <UserPage user={this.state.user} />}</Fragment>;
  }
}

export default UserPageContainer;
