import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from '../components/CharacterList';

test('CharacterList matches snapshot', () => {
  const { asFragment } = render(<CharacterList />);
  expect(asFragment()).toMatchSnapshot();
});
