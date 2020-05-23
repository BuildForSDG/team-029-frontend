import React from 'react';
import { bool, string } from 'prop-types';
import logo from '../../assets/logo.png';

import './navbar.styles.scss';

const Navbar = ({ hasLinks, activeLink }) => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<img src={logo} alt="logo" />
			</div>
			{hasLinks && (
				<ul>
					<li className={activeLink === 'Home' ? 'active' : ''}>
						<a>Home</a>
					</li>
					<li className={activeLink === 'Road Info' ? 'active' : ''}>
						<a>Road Info</a>
					</li>
				</ul>
			)}
		</div>
	);
};

Navbar.defaultProps = {
	hasLinks: true,
	activeLink: 'Home'
};

Navbar.propTypes = {
	hasLinks: bool,
	activeLink: string
};

export default Navbar;
