import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import CharacterList from '../components/CharacterList';

test('CharacterList renders and matches snapshot', async () => {
  render(<CharacterList />);

  await waitFor(() => {
    expect(screen.getByText('Marvel Characters')).toBeInTheDocument();

    const { asFragment } = screen;
    expect(asFragment()).toMatchSnapshot();
  });
});
