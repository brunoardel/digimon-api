import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    className="navbar is-black"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link to="/home" className="navbar-item">
        Digimon Api
      </Link>
    </div>
  </nav>
);

export default Navbar;
