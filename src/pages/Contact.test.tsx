import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact page content and handles submit', () => {
  window.alert = jest.fn();
  render(<Contact />);
  expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  expect(screen.getByText(/info@elsafwacargo.com/i)).toBeInTheDocument();
  
  const submitButton = screen.getByText(/Send Message/i);
  fireEvent.click(submitButton);
  expect(window.alert).toHaveBeenCalledWith('Thank you for contacting us! We will get back to you shortly.');
});
