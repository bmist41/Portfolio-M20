// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>About Me</Link>
        </li>
        <li style={styles.li}>
          <Link to="/portfolio" style={styles.link}>Portfolio</Link>
        </li>
        <li style={styles.li}>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  li: {
    margin: '0 10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;