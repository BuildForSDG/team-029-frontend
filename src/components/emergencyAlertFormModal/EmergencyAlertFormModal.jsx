import React, { useState } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import Button from '../button/Button.jsx';
import AlertForm from '../alertForm/AlertForm.jsx';

import './emergencyAlertFormModal.styles.scss';

const EmergencyAlertFormModal = () => {
	const [ isOPen, setIsOpen ] = useState(false);
	const handleClose = () => {
		setIsOpen(false);
	};
	const trigger = (
		<Button onClick={() => setIsOpen(true)} className="custom-btn transform">
			Send an Alert
		</Button>
	);
	return (
		<Modal centered={false} open={isOPen} onClose={handleClose} trigger={trigger} className="modal">
			<Icon name="close" className="modal-close-icon" onClick={handleClose} />
			<AlertForm modalClose={handleClose} clickHandler={handleClose} />
		</Modal>
	);
};

export default EmergencyAlertFormModal;
