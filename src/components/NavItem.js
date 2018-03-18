import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ children }) => (
  <li className="navItem">
    <NavLink to={`/topics/${children.slug}`}>{children.title}</NavLink>
  </li>
);

export default NavItem;
