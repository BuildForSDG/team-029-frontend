import React from 'react';
import { render, cleanup } from '@testing-library/react';
import InputTextArea from './InputTextArea.jsx';

afterEach(cleanup);

test('Should render <InputTextArea /> ', () => {
	const { getByText, getByPlaceholderText } = render(
		<InputTextArea placeholder="my test input" name="test" label="customon input" />
	);
	expect(getByText(/customon input/i)).toBeInTheDocument();
	expect(getByPlaceholderText('my test input')).toBeInTheDocument();
});
