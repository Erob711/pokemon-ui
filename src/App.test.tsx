import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App', () => {
  render(<App />);
  const appWrapper = screen.getByTitle("wrapper");

  // demo: change to have appWrapper (not) be in the document
  expect(appWrapper).toBeInTheDocument();
});
