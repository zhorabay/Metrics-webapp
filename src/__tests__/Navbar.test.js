import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Navbar matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});
