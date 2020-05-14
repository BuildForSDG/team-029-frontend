import React from 'react';
import { Button } from 'semantic-ui-react';
import { string, func, node } from 'prop-types';

import './button.styles.scss';

const CustomButton = ({ onClick, children, className, ...rest }) => {
	return (
		<Button {...rest} className={`${className} custom-button`} onClick={onClick}>
			{children}
		</Button>
	);
};

CustomButton.defaultProps = {
	onClick: () => {},
	className: ''
};

CustomButton.propTypes = {
	onClick: func,
	children: node.isRequired,
	className: string
};

export default CustomButton;
