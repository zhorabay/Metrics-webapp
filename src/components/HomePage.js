import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  return (
    <section className="mainpage">
      <div className="mainpage-body">
        <ul className="mainpage-icons">
          <li>
            <i class="fa-brands fa-superpowers"></i>
            <h2 className="mainpage-title" to="/characters">CHARACTERS</h2>
            <p className="item-amount">47</p>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-video" />
            <h2 className="mainpage-title">COMICS</h2>
            <p className="item-amount">27</p>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-gamepad" />
            <h2 className="mainpage-title">GAMES</h2>
            <p className="item-amount">13</p>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-gear" />
            <h2 className="mainpage-title">SETTINGS</h2>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </li>
        </ul>
      </div>
      <footer>
        <a className="footer-link" href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>
      </footer>
    </section>
  );
};

export default HomePage;
