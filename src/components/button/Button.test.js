import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './Button.jsx';

afterEach(cleanup);

test('Should render <Button /> with the given childeren', () => {
	const { getByText } = render(<Button>Go!</Button>);
	const linkElement = getByText(/Go!/i);
	expect(linkElement).toBeInTheDocument();
});
