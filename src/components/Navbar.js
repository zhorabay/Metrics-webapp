import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser, faMicrophone, faHouse, faGear,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import MarvelLogo from '../MarvelLogo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-tabs-desk">
        <li>
          <NavLink className="navbar-main" to="/">
            <img className="navbar-img" src={MarvelLogo} alt="Marvel logo" />
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon className="signin" icon={faCircleUser} />
          <FontAwesomeIcon className="signin" icon={faGear} />
        </li>
      </ul>
      <ul className="navbar-tabs-mob">
        <li>
          <NavLink className="navbar-main" to="/">
            <FontAwesomeIcon className="navbar-main" icon={faHouse} />
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon className="signin" icon={faMicrophone} />
          <FontAwesomeIcon className="signin" icon={faGear} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
