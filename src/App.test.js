import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Subscribe and follow @hasham94 link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Subscribe and follow @hasham94/i);
  expect(linkElement).toBeInTheDocument();
});
