import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages import
import LandingPage from './pages/landing/Landing.page.jsx';
import LoginPage from './pages/login/Login.jsx';

import './App.scss';
import Navbar from './components/navbar/Navbar.jsx';

const App = () => {
	return (
		<Router>
			<Navbar hasLinks={false} />
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/login" exact component={LoginPage} />
			</Switch>
		</Router>
	);
};

export default App;
