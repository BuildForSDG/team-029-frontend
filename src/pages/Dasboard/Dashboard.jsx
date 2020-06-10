import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Sidebar as Layout, Icon, Button } from 'semantic-ui-react';
import { object } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import routes from './routes';
import setAuthToken from '../../util/setAuthToken';
import { firestore, database } from '../../firebase/firebase.util';
import { updateEmergency } from '../../redux/emergency/emergencyAction';
import { logOutUser } from '../../redux/users/userAction';
import './dashboard.styles.scss';

const Dashboard = ({ userState, history, updateEmergency, logOutUser }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	// check for token
	useEffect(() => {
		const { token } = userState;
		if (!token) history.push("/login");
		setAuthToken(token);
		database.ref().on("value", (snapshot) => {
			const vals = snapshot.val();
			console.log(snapshot);
			let _records = [];
			for (var key in vals) {
				_records.push({
					...vals[key],
					id: key
				});
			}
			console.log(_records);
			updateEmergency(_records)
		})
	}, [])

	const handleLogout = () => {
		logOutUser();
		return history.push("/login");
	}

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
					<div className="user-top-bar">
						<Button
							onClick={handleLogout}
							circular
							style={{ color: '#ffb75a', background: "#fff" }}
							content="Logout"
						/>
					</div>
				</div>
				<div className="page-content">
					<Switch>
						{routes.map(({ main: Page, path, exact }, idx) => (
							<Route
								key={idx}
								exact={exact}
								path={path}
								render={(routeProps) => <Page {...routeProps} />}
							/>
						))}
					</Switch>
				</div>
			</Layout.Pusher>
		</Layout.Pushable>
	);
};

const mapStateToProps = state => ({
	userState: state.user
})

Dashboard.propTypes = {
	userState: object.isRequired,
	history: object.isRequired
}

export default connect(mapStateToProps, { updateEmergency, logOutUser })(Dashboard);
