import { NavLink } from 'react-router-dom';
import MarvelLogo from '../MarvelLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-tabs-desk">
        <li>
          <NavLink className="navbar-main" to="/">
            <img src={MarvelLogo} alt="Marvel logo" />
          </NavLink>
        </li>
        <li>
          <i class="fa-solid fa-circle-user"></i>
        </li>
      </ul>
      <ul className="navbar-tabs-mob">
        <li>
          <NavLink className="navbar-main" to="/">
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-microphone" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-gear" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
