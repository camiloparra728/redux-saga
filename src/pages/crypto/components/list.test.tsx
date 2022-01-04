import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './list';


test('renders learn react link', () => {
  render(<List />);
  const linkElement = screen.getByText(/DETAIL/i);
  expect(linkElement).toBeInTheDocument();
});
