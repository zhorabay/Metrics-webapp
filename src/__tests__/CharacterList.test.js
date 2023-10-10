import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CharacterList from '../components/CharacterList';

test('CharacterList matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <CharacterList />
      </Router>
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
