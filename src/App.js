import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages import
import LandingPage from './pages/landing/Landing.page.jsx';
import LoginPage from './pages/login/Login.jsx';
import Dashboard from './pages/Dasboard/Dashboard.jsx';

import withNavbar from './components/withNavbar/withNavbar.js'

import './App.scss';
const App = () => {
	return (
		<main id="app">
			<Router>
				<Switch>
					<Route path="/" exact render={(props) => withNavbar(LandingPage, { componentProps: props })} />
					<Route path="/login" render={props => withNavbar(LoginPage, { navProps: { hasLinks: false }, componentProps: props })} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		</main>
	);
};

export default App;
