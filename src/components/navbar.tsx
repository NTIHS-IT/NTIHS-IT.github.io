import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from './img/logo-white.a9c53c85.svg';
import './sass/navbar.sass';

const Navbar = () => {
  const [menuSwitch, setMenuSwitch] = useState(false);
  const closeMenu = () => {
    setMenuSwitch(false);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={Logo} />
          <h1>NTIHS</h1>
        </a>
      </div>
      <ul className={menuSwitch ? 'open-menu menu' : 'menu'}>
        <li>
          <Link to="/classList" onClick={closeMenu}>
            課表
          </Link>
        </li>
        <li>
          <Link to="/member" onClick={closeMenu}>
            幹部
          </Link>
        </li>
        <li>
          <Link to="/cooperate" onClick={closeMenu}>
            合作
          </Link>
        </li>
        <li>
          <a
            href="https://ntihs-it.github.io/NTIHS-Blog/"
            target="_blank" rel="noreferrer"
            onClick={closeMenu}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="https://peing.net/en/ntihs112th"
            target="_blank" rel="noreferrer"
            onClick={closeMenu}
          >
            匿名
          </a>
        </li>
      </ul>
      <div className="menu-button">
        <input type="checkbox" checked={menuSwitch} onClick={() => {
          setMenuSwitch(!menuSwitch);
        }}/>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
