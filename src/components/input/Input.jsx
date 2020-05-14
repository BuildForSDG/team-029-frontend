import React from 'react';
import { string, func } from 'prop-types';

import './input.styles.scss';

const Input = ({ label, inputType, placeholder, inputName, onChange }) => {
	return (
		<div className="input-wrapper">
			<label htmlFor={inputName}>{label}</label>
			<input id={inputName} type={inputType} name={inputName} onChange={onChange} placeholder={placeholder} />
		</div>
	);
};

Input.defaultProps = {
	inputName: '',
	placeholder: '',
	onChange: () => {}
};

Input.propTypes = {
	label: string.isRequired,
	inputType: string.isRequired,
	placeholder: string,
	inputName: string,
	onChange: func
};

export default Input;
