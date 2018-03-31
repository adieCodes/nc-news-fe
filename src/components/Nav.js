import React from 'react';
import NavItem from './NavItem';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props => (
  <nav className="navbar is-fixed-top" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        NC NEWS
      </Link>
      <div className="navbar-burger">
        {props.topics.map(topic => (
          <span key={topic._id}>
            <NavItem>{topic}</NavItem>
          </span>
        ))}
      </div>
    </div>
    <div className="navbar-menu navbar-end">
      {props.topics.map(topic => <NavItem key={topic._id}>{topic}</NavItem>)}
    </div>
  </nav>
);

Nav.propTypes = {
  topics: PT.array.isRequired
};

export default Nav;
