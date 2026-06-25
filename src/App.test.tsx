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
import App from './App';

test('renders App and shows Home by default', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getAllByText(/We Deliver/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/El Safwa Cargo & Export/i)).toBeInTheDocument(); // footer
});
