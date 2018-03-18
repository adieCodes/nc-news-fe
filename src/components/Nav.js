import React, { Component } from 'react';
import { getTopics } from '../api';

class Nav extends Component {
  state = { topics: [] };

  componentDidMount() {
    getTopics().then(res => this.setState({ topics: res.topics }));
  }

  render() {
    return <h1>Nav</h1>;
  }
}

export default Nav;
