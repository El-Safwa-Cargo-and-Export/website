import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Services from './Services';

test('renders Services page content', () => {
  render(<Services />);
  expect(screen.getByText(/What We Do/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
  expect(screen.getByText(/Air Freight/i)).toBeInTheDocument();
  expect(screen.getByText(/Ocean Freight/i)).toBeInTheDocument();
  expect(screen.getByText(/Customs Brokerage/i)).toBeInTheDocument();
});
