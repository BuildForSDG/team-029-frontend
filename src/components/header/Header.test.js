import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header.jsx';

afterEach(cleanup);

test('Should render <Header /> with a given title', () => {
	const { getByText } = render(<Header title="Coming Soon" />);
	const linkElement = getByText(/Coming Soon/i);
	expect(linkElement).toBeInTheDocument();
});
