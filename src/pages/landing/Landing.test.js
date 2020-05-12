import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LandingPage from './Landing.page.jsx';

afterEach(cleanup);

it('renders the landing page to match snapshot', () => {
	const { asFragment } = render(<LandingPage />);
	expect(asFragment()).toMatchSnapshot();
});
