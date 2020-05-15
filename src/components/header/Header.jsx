import React from 'react';
import { string } from 'prop-types';

import './header.styles.scss';

const Header = ({ title, underlineStyle, headingSyle, containerStyle }) => {
	return (
		<div className={`heading-container ${containerStyle}`}>
			<h3 className={`${headingSyle} heading`}>{title}</h3>
			<div className={`underline ${underlineStyle}`} />
		</div>
	);
};

Header.defautProps = {
	underlineStyle: '',
	headingSyle: '',
	containerStyle: ''
};

Header.propTypes = {
	title: string.isRequired,
	underlineStyle: string,
	headingSyle: string,
	containerStyle: string
};

export default Header;
