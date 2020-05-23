import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CoordinateInput from './CoordinateInput.jsx';

afterEach(cleanup);

test('Should render <CoordinateInput /> with lon and lat', () => {
	const { getByText, getByPlaceholderText } = render(<CoordinateInput label="customon location" />);
	expect(getByText(/customon location/i)).toBeInTheDocument();
	expect(getByPlaceholderText('lon')).toBeInTheDocument();
	expect(getByPlaceholderText('lat')).toBeInTheDocument();
});
