import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/NotReady.css';

const NotReady = () => {
  return (
    <>
      <h2>This page will be updated later</h2>
      <Link className="back1" to="/">
        <FontAwesomeIcon className="back-icon1" icon={faAngleLeft} />
      </Link>
    </>
  );
};

export default NotReady;
