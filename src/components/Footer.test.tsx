import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

test('renders Footer with current year', () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const footerText = screen.getByText(new RegExp(`© ${currentYear} El Safwa Cargo and Export. All rights reserved.`, 'i'));
  expect(footerText).toBeInTheDocument();
});
