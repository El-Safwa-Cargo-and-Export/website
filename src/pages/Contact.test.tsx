import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact page content', () => {
  render(<Contact />);
  expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  expect(screen.getByText(/info@elsafwacargo.com/i)).toBeInTheDocument();
});
