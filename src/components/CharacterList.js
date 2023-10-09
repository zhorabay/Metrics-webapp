import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../redux/comicsSlice';

function CharacterList() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.comics.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <div>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            </div>
            <div>
              {character.name}
            </div>
            <div>
              {character.description}
            </div>
            <ul>
              <li>Comics</li>
              <li>Series</li>
              <li>Events</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
