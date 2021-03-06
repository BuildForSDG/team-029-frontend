import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders welcome to our app', () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
