import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome to our app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello welcome to our app/i);
  expect(linkElement).toBeInTheDocument();
});
