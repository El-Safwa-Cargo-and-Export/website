import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IataBadge from './IataBadge';

test('renders IataBadge correctly', () => {
  render(<IataBadge />);
  expect(screen.getByText('IATA')).toBeInTheDocument();
  expect(screen.getByText('CargoLink Code')).toBeInTheDocument();
  expect(screen.getByText('9047181')).toBeInTheDocument();
  const linkElement = screen.getByRole('link');
  expect(linkElement).toHaveAttribute('href', expect.stringContaining('8723'));
});
