import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Login from './Login.jsx';

afterEach(cleanup);

it('Should render <Login /> page component', () => {
	const { asFragment } = render(<Login />);
	expect(asFragment()).toMatchSnapshot();
});
