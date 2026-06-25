import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About page content', () => {
  render(<About />);
  expect(screen.getByText(/Who We Are/i)).toBeInTheDocument();
  expect(screen.getByText(/Delivering the World/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
});
