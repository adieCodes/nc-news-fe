import React, { Component } from 'react';
import NavContainer from './containers/NavContainer';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <Routes />
      </div>
    );
  }
}

export default App;
