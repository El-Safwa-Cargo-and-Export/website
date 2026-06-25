import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
  MemoryRouter: ({ children }: any) => <div>{children}</div>,
  useLocation: () => ({ pathname: '/' }),
  useNavigate: () => mockNavigate,
  Routes: ({ children }: any) => <div>{children}</div>,
  Route: ({ element }: any) => <div>{element}</div>,
}), { virtual: true });

import Home from './Home';

test('renders Home page content and handles click', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(screen.getByText(/We Deliver/i)).toBeInTheDocument();
  expect(screen.getByText(/Global Logistics Excellence/i)).toBeInTheDocument();
  expect(screen.getByText(/Air & Sea Freight/i)).toBeInTheDocument();
  
  const quoteButton = screen.getByText(/Request a Quote/i);
  fireEvent.click(quoteButton);
  expect(mockNavigate).toHaveBeenCalledWith('/contact');
});
