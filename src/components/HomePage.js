import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight, faVideo, faGamepad, faBolt,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <section className="mainpage">
      <div className="mainpage-body">
        <ul className="mainpage-icons">
          <li className="icons-list">
            <a className="characters-link" href="characters">
              <FontAwesomeIcon className="in" icon={faAngleRight} />
              <FontAwesomeIcon className="icon" icon={faSuperpowers} />
              <div className="firstline">
                <h2 className="mainpage-title" to="/characters">CHARACTERS</h2>
                <p className="item-amount">1</p>
              </div>
            </a>
          </li>
          <li className="icons-list">
            <FontAwesomeIcon className="in" icon={faAngleRight} />
            <FontAwesomeIcon className="icon" icon={faBolt} />
            <div className="firstline">
              <h2 className="mainpage-title">COMICS</h2>
              <p className="item-amount">2</p>
            </div>
          </li>
          <li className="icons-list">
            <FontAwesomeIcon className="in" icon={faAngleRight} />
            <FontAwesomeIcon className="icon" icon={faGamepad} />
            <div className="firstline">
              <h2 className="mainpage-title">GAMES</h2>
              <p className="item-amount">3</p>
            </div>
          </li>
          <li className="icons-list">
            <FontAwesomeIcon className="in" icon={faAngleRight} />
            <FontAwesomeIcon className="icon" icon={faVideo} />
            <div className="firstline">
              <h2 className="mainpage-title">VIDEOS</h2>
              <p className="item-amount">4</p>
            </div>
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
