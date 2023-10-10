import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import NotReady from '../components/NotReady';

test('NotReady component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <NotReady />
      </Router>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
