import React from 'react';
import NavItem from './NavItem';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = props => (
  <ul className="nav">
    <li className="navItem">
      <Link to="/">Home</Link>
    </li>
    {props.topics.map(topic => <NavItem key={topic._id}>{topic}</NavItem>)}
  </ul>
);

Nav.propTypes = {
  topics: PT.array.isRequired
};

export default Nav;
