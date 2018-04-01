import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

const NavItem = ({ children }) => (
  <NavLink className="navbar-item" to={`/topics/${children.slug}`}>
    {children.title}
  </NavLink>
);

NavItem.propTypes = {
  children: PT.object.isRequired
};

export default NavItem;
