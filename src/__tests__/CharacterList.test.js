import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import getCharacters from 'redux-thunk';
import CharacterList from '../components/CharacterList';
import { setCharacters } from '../redux/comicsSlice';

const middlewares = [getCharacters];
const mockStore = configureStore(middlewares);
const initialState = {
  comics: {
    characters: [
      {
        id: 1,
        name: 'Character 1',
        description: 'Description 1',
        thumbnail: {
          path: 'path1',
          extension: 'ext1',
        },
      },
      {
        id: 2,
        name: 'Character 2',
        description: 'Description 2',
        thumbnail: {
          path: 'path2',
          extension: 'ext2',
        },
      },
    ],
  },
};

const store = mockStore(initialState);

test('CharacterList renders characters correctly', async () => {
  store.dispatch(setCharacters(initialState.comics.characters));

  render(
    <Provider store={store}>
      <CharacterList />
    </Provider>,
  );

  await waitFor(() => {
    const characterNames = screen.getAllByText(/Character \d/);
    const characterDescriptions = screen.getAllByText(/Description \d/);
    const characterImages = screen.getAllByAltText(/Character \d/);

    expect(characterNames.length).toBe(2);
    expect(characterDescriptions.length).toBe(2);
    expect(characterImages.length).toBe(2);
  });
});
