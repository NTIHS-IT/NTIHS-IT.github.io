import React from 'react';
import Logo from './img/logo-white.a9c53c85.svg';
import './sass/home.sass';

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <img src={Logo} />
        <p>台南高工 網頁設計社</p>
        <div className="icons">
          <a className="fab fa-github" href="https://github.com/NTIHS-IT"></a>
          <a className="fab fa-facebook" href="https://www.facebook.com/103730941540184"></a>
          <a className="fab fa-instagram" href="https://www.instagram.com/ntihs.web/"></a>
          <a className="fab fa-youtube" href="https://www.youtube.com/channel/UCex1cjm-Z6WGP1O1CSNTVpw"></a>
          <a className="fab fa-discord" href="https://discord.gg/wkdEkYAJsS"></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
