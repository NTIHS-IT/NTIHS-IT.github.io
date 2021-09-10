import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './img/logo-white.a9c53c85.svg';
import './sass/navbar.sass';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="logo">
        <Link to="/">
          <img src={Logo} />
          <h1>NTIHS</h1>
        </Link>
      </li>
      <li>
        <Link to="/classList">
          課表
        </Link>
      </li>
      <li>
        <a href="https://ntihs-it.github.io/NTIHS-Blog/" target="_blank" rel="noreferrer">
          Blog
        </a>
      </li>
      <li>
        <a
          href="https://peing.net/en/ntihs112th"
          target="_blank" rel="noreferrer"
        >
          匿名
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
