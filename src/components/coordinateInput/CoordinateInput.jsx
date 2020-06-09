import React, { useState } from 'react';
import { string, func } from 'prop-types';

import './coordinateInput.style.scss';

const CoordinateInput = ({ onChange, label, containerStyle, latValue, lonValue }) => {
	const [isInputFocused, setIsInputFocused] = useState(false);
	return (
		<div className={`${containerStyle} coordinate-input-wrapper`}>
			<label>{label}</label>
			<div className={isInputFocused ? 'focus coordinate' : 'coordinate'}>
				<input
					onFocus={() => setIsInputFocused(true)}
					onBlur={() => setIsInputFocused(false)}
					type="number"
					name="longitude"
					onChange={onChange}
					placeholder="lon"
					value={lonValue}
				/>
				<input
					onFocus={() => setIsInputFocused(true)}
					onBlur={() => setIsInputFocused(false)}
					type="number"
					name="latitude"
					onChange={onChange}
					placeholder="lat"
					value={latValue}
				/>
			</div>
		</div>
	);
};

CoordinateInput.defaultProps = {
	label: 'Location Coordinate',
	onChange: () => { },
	containerStyle: ''
};

CoordinateInput.propTypes = {
	label: string,
	containerStyle: string,
	onChange: func
};

export default CoordinateInput;
