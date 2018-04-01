import React, { Component } from 'react';
import NavItem from './NavItem';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  state = {
    burgerMenuActive: false
  };

  handleClick = event => {
    this.setState({ burgerMenuActive: !this.state.burgerMenuActive });
  };

  render() {
    const burgerMenuClass = this.state.burgerMenuActive ? 'is-active' : '';
    return (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            NC NEWS
          </Link>
          <div className={`navbar-burger ${burgerMenuClass}`} onClick={this.handleClick}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={`navbar-menu navbar-end ${burgerMenuClass}`}>
          {this.props.topics.map(topic => <NavItem key={topic._id}>{topic}</NavItem>)}
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  topics: PT.array.isRequired
};

export default Nav;
