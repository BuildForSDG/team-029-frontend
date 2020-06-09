import React from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './navbar.styles.scss';

const Navbar = ({ hasLinks, activeLink }) => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Link to="/"><img src={logo} alt="logo" /></Link>
			</div>
			{hasLinks && (
				<ul>
					<li className={activeLink === 'Home' ? 'active' : ''}>
						<Link to="/">Home</Link>
					</li>
					<li className={activeLink === 'Road Info' ? 'active' : ''}>
						<Link to="/">Road Info</Link>
					</li>
					<li className={activeLink === 'Login Admin' ? 'active' : ''}>
						<Link to="/login">Login</Link>
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
