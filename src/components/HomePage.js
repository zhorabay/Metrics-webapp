import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight, faBolt, faGamepad, faVideo,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/HomePage.css';

const HomePage = () => {
  const [categoryFilter, setCategoryFilter] = useState('');

  const metricsData = [
    { name: 'Characters', category: 'Characters', icon: faSuperpowers },
    { name: 'Comics', category: 'Comics', icon: faBolt },
    { name: 'Games', category: 'Games', icon: faGamepad },
    { name: 'Videos', category: 'Videos', icon: faVideo },
  ];

  const filteredMetrics = metricsData.filter((metric) => metric.category.toLowerCase().includes(categoryFilter.toLowerCase()));

  return (
    <section className="mainpage">
      <div className="mainpage-body">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search by category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          />
        </div>
        <ul className="mainpage-icons">
          {filteredMetrics.map((metric, index) => (
            <li className="icons-list" key={metric.name}>
              <Link className="characters-link" to={`/${metric.name.toLowerCase()}`}>
                <FontAwesomeIcon className="in" icon={faAngleRight} />
                <FontAwesomeIcon className="icon" icon={metric.icon} />
                <div className="firstline">
                  <h2 className="mainpage-title">{metric.name}</h2>
                  <p className="item-amount">{index + 1}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <a className="footer-link" href="http://marvel.com">
          Data provided by Marvel. © 2023 MARVEL
        </a>
      </footer>
    </section>
  );
};

export default HomePage;
