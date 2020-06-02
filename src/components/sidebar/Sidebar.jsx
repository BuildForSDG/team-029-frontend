import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { object, arrayOf, bool, func } from 'prop-types';
import logoImg from '../../assets/LOGO.svg';
import deleteIcon from '../../assets/deleteIcon.svg';
import profileImg from '../../assets/avater.jpg';

import './sidebar.styles.scss';

const AppSidebar = ({ isOpen, toggleSideNav, routes, history }) => {
	const { pathname: currentPath } = history.location;
	return (
		<Sidebar
			as="div"
			animation="push"
			icon="labeled"
			vertical="true"
			visible={isOpen}
			width="wide"
			className="side-nav"
		>
			<div className="nav-content">
				<div onClick={() => toggleSideNav()} className="header">
					<img src={logoImg} alt="logo" />
					<img className="close-btn" src={deleteIcon} alt="close" />
				</div>
				<div className="user">
					<div className="profileImg">
						<img src={profileImg} alt="profile" />
					</div>
					<div>
						<h4>John Mark</h4>
						<p>Admin</p>
					</div>
				</div>
				<nav>
					<ul>
						{routes.map(({ name, path }) => (
							<li key={name} className={currentPath === path ? "active" : null}>
								<div>
									<Link to={path}>{name}</Link>
								</div>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</Sidebar>
	);
};

AppSidebar.defaultProps = {
	isOpen: true,
	toggleSideNav: () => { },
	routes: [{}]
};

AppSidebar.propTypes = {
	isOpen: bool,
	toggleSideNav: func,
	routes: arrayOf(object),
	history: object.isRequired
};

export default withRouter(AppSidebar);
