import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
  MemoryRouter: ({ children }: any) => <div>{children}</div>,
  useLocation: () => ({ pathname: '/' }),
  useNavigate: () => jest.fn(),
  Routes: ({ children }: any) => <div>{children}</div>,
  Route: ({ element }: any) => <div>{element}</div>,
}), { virtual: true });
import Navbar from './Navbar';

test('renders Navbar links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByText('El Safwa')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Services')).toBeInTheDocument();
  expect(screen.getByText('Industries')).toBeInTheDocument();
  expect(screen.getByText('Contact Us')).toBeInTheDocument();
});
