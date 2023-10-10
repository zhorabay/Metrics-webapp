import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/CharacterList.css';
import { getCharacters } from '../redux/comicsSlice';

function CharacterList() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.comics.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="characters">
      <Link className="back" to="/">
        <FontAwesomeIcon className="back-icon" icon={faAngleLeft} />
      </Link>
      <h2>Marvel Characters</h2>
      <ul className="characters-card">
        {characters.map((character) => (
          <li className="card-list" key={character.id}>
            <div>
              <img className="image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            </div>
            <h3 className="name">
              {character.name}
            </h3>
            <p className="description">
              {character.description}
            </p>
            <ul className="characters-links">
              <li className="link-list">Comics</li>
              <li className="link-list">Series</li>
              <li className="link-list">Events</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
