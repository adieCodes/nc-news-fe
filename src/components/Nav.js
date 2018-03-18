import React from 'react';
import NavItem from './NavItem';

const Nav = props => (
  <ul className="nav">{props.topics.map(topic => <NavItem key={topic._id}>{topic}</NavItem>)}</ul>
);

export default Nav;
