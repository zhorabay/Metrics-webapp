import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../components/HomePage';

test('HomePage renders correctly', () => {
  const { container } = render(<HomePage />);
  expect(container).toMatchSnapshot();
});
