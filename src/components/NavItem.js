import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

const NavItem = ({ children }) => (
  <li className="navbar-item">
    <NavLink to={`/topics/${children.slug}`}>{children.title}</NavLink>
  </li>
);

NavItem.propTypes = {
  children: PT.object.isRequired
};

export default NavItem;
