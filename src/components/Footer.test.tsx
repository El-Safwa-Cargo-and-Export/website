import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
}), { virtual: true });

test('renders Footer with current year', () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const footerText = screen.getByText(
    new RegExp(
      `© ${currentYear} El Safwa Cargo and Export. All rights reserved.`,
      'i',
    ),
  );
  expect(footerText).toBeInTheDocument();
});


