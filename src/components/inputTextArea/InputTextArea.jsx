import React from 'react';
import { string, func, object } from 'prop-types';

import './inputTextArea.styles.scss';

const InputTextArea = ({ containerStyle, label, placeholder, name, onChange }) => {
	return (
		<div style={containerStyle} className="text-area-input">
			<label>{label}</label>
			<textarea rows="4" placeholder={placeholder} name={name} onChange={onChange} />
		</div>
	);
};

InputTextArea.defaultProps = {
	onChange: () => {},
	containerStyle: {}
};

InputTextArea.propTypes = {
	containerStyle: object,
	label: string.isRequired,
	placeholder: string.isRequired,
	name: string.isRequired,
	onChange: func
};

export default InputTextArea;
