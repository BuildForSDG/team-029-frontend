import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from './Navbar.jsx';

afterEach(cleanup);

it('Should render <Navbar />', () => {
	const { asFragment } = render(<Navbar />);
	expect(asFragment()).toMatchSnapshot();
});
