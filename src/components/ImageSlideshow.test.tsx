import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageSlideshow from './ImageSlideshow';

jest.useFakeTimers();

test('cycles through images', () => {
  render(<ImageSlideshow />);
  const firstImage = screen.getByTestId('slide-0');
  expect(firstImage).toHaveClass('active');

  act(() => {
    jest.advanceTimersByTime(3000);
  });
  const secondImage = screen.getByTestId('slide-1');
  expect(secondImage).toHaveClass('active');

  act(() => {
    jest.advanceTimersByTime(3000);
  });
  const thirdImage = screen.getByTestId('slide-2');
  expect(thirdImage).toHaveClass('active');
});

test('renders ImageSlideshow and transitions slides', () => {
  render(<ImageSlideshow />);
  const firstImage = screen.getByTestId('slide-0');
  expect(firstImage).toHaveStyle('opacity: 1');

  act(() => {
    jest.advanceTimersByTime(3000);
  });
  const secondImage = screen.getByTestId('slide-1');
  expect(secondImage).toHaveStyle('opacity: 1');
});
