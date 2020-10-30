import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    marginLeft: 10,
    padding: 7,
    fontWeight: 400,
    background: '#1c91b4',
    borderRadius: 6,
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
