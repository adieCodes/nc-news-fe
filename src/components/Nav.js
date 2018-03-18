import React from 'react';
import NavItem from './NavItem';
import PT from 'prop-types';

const Nav = props => (
  <ul className="nav">{props.topics.map(topic => <NavItem key={topic._id}>{topic}</NavItem>)}</ul>
);

Nav.propTypes = {
  topics: PT.array.isRequired
};

export default Nav;
