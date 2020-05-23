import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import EmargencyAlertFormModal from './EmergencyAlertFormModal.jsx';

afterEach(cleanup);

test('Should render <EmergencyAlertFormModal /> component', () => {
	const { asFragment, getByText } = render(<EmargencyAlertFormModal />);
	fireEvent.click(getByText('Send an Alert'));
	expect(asFragment()).toMatchSnapshot();
});
