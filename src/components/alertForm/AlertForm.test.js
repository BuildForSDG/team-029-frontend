import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AlertForm from './AlertForm.jsx';

afterEach(cleanup);

test('Should render <AlertForm/> component', () => {
	const { asFragment } = render(<AlertForm />);
	expect(asFragment()).toMatchSnapshot();
});
