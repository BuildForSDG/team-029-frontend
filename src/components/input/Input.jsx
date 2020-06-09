import React from 'react';
import { string, func } from 'prop-types';

import './input.styles.scss';

const Input = ({ label, inputType, placeholder, inputName, onChange, containerStyle, value }) => {
	return (
		<div className={`input-wrapper ${containerStyle}`}>
			{label && (<label htmlFor={inputName}>{label}</label>)}
			<input
				id={inputName}
				type={inputType}
				name={inputName}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				required={true}
			/>
		</div>
	);
};

Input.defaultProps = {
	inputName: '',
	placeholder: '',
	onChange: () => { },
	containerStyle: '',
	value: ""
};

Input.propTypes = {
	label: string,
	inputType: string.isRequired,
	placeholder: string,
	inputName: string,
	onChange: func,
	containerStyle: string,
	value: string
};

export default Input;
