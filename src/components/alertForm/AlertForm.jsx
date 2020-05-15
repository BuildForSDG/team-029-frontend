import React, { useState } from 'react';
import Header from '../header/Header.jsx';
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';
import InputTextArea from '../inputTextArea/InputTextArea.jsx';
import CoordinateInput from '../coordinateInput/CoordinateInput.jsx';
import Spinner from '../spinner/Spinner.jsx';
import successIcon from '../../assets/tickIcon.png';
import './alertForm.styles.scss';

const AlertForm = () => {
	const [ showSuccess, setShowSuccess ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => setLoading(false), 1400);
		setTimeout(() => setShowSuccess(true), 1500);
	};
	return (
		<div className="form-wrapper">
			{!showSuccess ? (
				<form>
					<Header
						headingSyle="alert-header"
						underlineStyle="alert-header-underline"
						title="State your Emergency"
						containerStyle="alert-header-container"
					/>
					{loading && <Spinner />}
					<Input inputName="name" inputType="text" label="Full Name" placeholder="enter your name" />
					<div className="two-column">
						<CoordinateInput containerStyle="two-column-input" />
						<Input
							inputName="phoneNumber"
							inputType="number"
							label="Available phone number"
							placeholder="080-000-0010"
							containerStyle="two-column-input"
						/>
					</div>
					<InputTextArea
						name="emergency"
						placeholder="Write some description for your emergency"
						label="Describe your emergency"
					/>
					<Button onClick={handleSubmit} style={{ width: '100%' }}>
						Send Emergency Alert
					</Button>
				</form>
			) : (
				<div>
					<Header
						headingSyle="alert-header"
						underlineStyle="alert-header-underline success"
						title="Successful"
					/>
					<div className="success-icon-container">
						<img src={successIcon} alt="icon" />
					</div>
					<h3 className="main-content">
						Your message has been <span>successfully</span> sent to an emergency team asigned to your
						location. they’ll be coming to your rescue in few minutes.
					</h3>
					<h3 className="sub-content">
						Meanwhile you can checkout some survival tips{' '}
						<span>
							<a href="#!">here</a>
						</span>
					</h3>
				</div>
			)}
		</div>
	);
};

export default AlertForm;
