import React, { Component } from 'react';
import { getUser } from '../api';
import UserPage from '../components/UserPage';

class UserPageContainer extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const { userName } = this.props.match.params;
    getUser(userName).then(res => this.setState({ user: res.user }));
  }

  render() {
    return <UserPage user={this.state.user} />;
  }
}

export default UserPageContainer;
