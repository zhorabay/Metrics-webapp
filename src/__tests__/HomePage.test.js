import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import HomePage from '../components/HomePage';

test('HomePage matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Search input changes value correctly', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>,
  );

  const searchInput = getByPlaceholderText('Search by category');

  fireEvent.change(searchInput, { target: { value: 'Characters' } });

  expect(searchInput.value).toBe('Characters');
});
