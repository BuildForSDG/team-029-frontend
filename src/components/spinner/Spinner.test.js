import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Spinner from './Spinner.jsx';

afterEach(cleanup);

test('Should render <Spinner />', () => {
	const { asFragment } = render(<Spinner />);
	expect(asFragment()).toMatchSnapshot();
});
