import React, { Component, Fragment } from 'react';
import { getTopics } from '../api';
import Nav from '../components/Nav';

class NavContainer extends Component {
  state = { topics: [], loading: true };

  componentDidMount() {
    getTopics().then(res => this.setState({ topics: res.topics, loading: false }));
  }

  render() {
    const isLoaded = !this.state.loading;
    return <Fragment>{isLoaded && <Nav topics={this.state.topics} />}</Fragment>;
  }
}

export default NavContainer;
