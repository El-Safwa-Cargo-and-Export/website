import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Industries from './Industries';

test('renders Industries page content', () => {
  render(<Industries />);
  expect(screen.getByText(/Sectors We Serve/i)).toBeInTheDocument();
  expect(screen.getByText(/Industries/i)).toBeInTheDocument();
  expect(screen.getByText(/Pharmaceuticals/i)).toBeInTheDocument();
  expect(screen.getByText(/Automotive/i)).toBeInTheDocument();
});
