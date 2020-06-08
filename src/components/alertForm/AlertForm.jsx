import React, { useState, useEffect } from 'react';
import Header from '../header/Header.jsx';
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';
import InputTextArea from '../inputTextArea/InputTextArea.jsx';
import CoordinateInput from '../coordinateInput/CoordinateInput.jsx';
import { reportEmergency } from '../../redux/emergency/emergencyAction';
import SelectInput from '../../components/selectInput/SelectInput.jsx';
import Spinner from '../spinner/Spinner.jsx';
import successIcon from '../../assets/tickIcon.png';
import { connect } from 'react-redux';


import './alertForm.styles.scss';
const AlertForm = ({ emergencyState, reportEmergency }) => {
	const [formInput, setFormInput] = useState({
		phone_number: "",
		severity: "",
		longitude: "",
		latitude: "",
		description: ""
	});
	const [showSuccess, setShowSuccess] = useState(false);
	const { reportLoading, reportSent } = emergencyState;
	const handleInputChange = (e) => {
		const { value, name } = e.target;
		return setFormInput({ ...formInput, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		reportEmergency(formInput);
	};

	useEffect(() => {
		if (reportSent) setShowSuccess(true);
	}, [reportSent])

	const selectOnptions = [
		{ key: '1', value: 'high', text: 'High - (death,casualty)' },
		{ key: '2', value: 'moderate', text: 'Medium - (casualty)' },
		{ key: '3', value: 'low', text: 'High - (normal)' },
	]

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
					{reportLoading && <Spinner />}
					<SelectInput
						label="Severity"
						placeholder="Select severity"
						options={selectOnptions}
						onChange={(_, { value }) => setFormInput({ ...formInput, severity: value })}
					/>
					<div className="two-column">
						<CoordinateInput
							onChange={handleInputChange}
							containerStyle="two-column-input"
							latValue={formInput.latitude}
							lonValue={formInput.longitude}
						/>
						<Input
							inputName="phone_number"
							inputType="number"
							label="Available phone number"
							placeholder="080-000-0010"
							containerStyle="two-column-input"
							value={formInput.phone_number}
							onChange={handleInputChange}
						/>
					</div>
					<InputTextArea
						name="description"
						placeholder="Write some description for your emergency"
						label="Describe your emergency"
						value={formInput.description}
						onChange={handleInputChange}
					/>
					<Button
						onClick={handleSubmit}
						style={{ width: '100%', color: "#fff", background: "#b40000" }}>
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

const mapStateToProps = state => ({
	emergencyState: state.emergency
})

export default connect(mapStateToProps, { reportEmergency })(AlertForm);
