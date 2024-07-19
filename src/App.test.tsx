import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App', () => {
  render(<App />);
  const appWrapper = screen.getByTitle("wrapper");
  expect(appWrapper).toBeInTheDocument();
});
