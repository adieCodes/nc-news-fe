import React from 'react';
import NavItem from './NavItem';

const Nav = props => (
  <div className="nav">{props.topics.map(topic => <NavItem>{topic}</NavItem>)}</div>
);

export default Nav;
