import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Input from './Input.jsx';

afterEach(cleanup);

test('Should render <Input /> and react to input change', () => {
	const { getByLabelText } = render(
		<Input placeholder="your address" inputType="text" inputName="address" label="Address" />
	);
	fireEvent.change(getByLabelText('Address'), {
		target: { value: 'Rivers elekahia estate' }
	});
});
