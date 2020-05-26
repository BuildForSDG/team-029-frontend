import React, { useState } from 'react';
import { Sidebar as Layout, Icon } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import routes from './routes';

import './dashboard.styles.scss';

const Dashboard = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const handleSideBarState = (state = null) => {
		if (state) {
			return setIsSidebarOpen(state)
		}
		return setIsSidebarOpen(!isSidebarOpen);
	}

	return (
		<Layout.Pushable className="dashboard-container">
			<Sidebar isOpen={isSidebarOpen} toggleSideNav={handleSideBarState} routes={routes} />
			<Layout.Pusher className="main-content" as="div">
				<div className="top-bar">
					<div onClick={() => handleSideBarState()}>
						{!isSidebarOpen && (<Icon name="bars" className="topbar-nav-btn" />)}
					</div>
				</div>
				<div className="page-content">
					<Switch>
						{routes.map(({ main: Page, path, exact }, idx) => (
							<Route key={idx} exact={exact} path={path} render={(routeProps) => <Page {...routeProps} />} />
						))}
					</Switch>
				</div>
			</Layout.Pusher>
		</Layout.Pushable>
	);
};

export default Dashboard;
