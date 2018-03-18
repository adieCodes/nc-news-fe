import React, { Component } from 'react';
import { getTopics } from '../api';
import Nav from '../components/Nav';

class NavContainer extends Component {
  state = { topics: [] };

  componentDidMount() {
    getTopics().then(res => this.setState({ topics: res.topics }));
  }

  render() {
    return <Nav topics={this.state.topics} />;
  }
}

export default NavContainer;
