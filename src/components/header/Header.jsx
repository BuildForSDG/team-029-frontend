import React from 'react';
import { string } from 'prop-types';

import './header.styles.scss';

const Header = ({ title }) => {
	return (
		<div className="heading-container">
			<h3 className="heading">{title}</h3>
			<div className="underline" />
		</div>
	);
};

Header.propTypes = {
	title: string.isRequired
};

export default Header;
