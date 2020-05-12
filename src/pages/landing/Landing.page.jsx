import React from 'react';
import { Button } from 'semantic-ui-react';
import logo from '../../assets/logo.png';
import blobImg from '../../assets/blob.png';
import carImg from '../../assets/car.png';

import './landing.styles.scss';

const LandingPage = () => (
	<div>
		<div className="nav-container">
			<div className="logo-container">
				<img src={logo} alt="logo" />
			</div>
			<ul>
				<li className="active">
					<a>Home</a>
				</li>
				<li>
					<a>Road Info</a>
				</li>
			</ul>
		</div>
		<div className="main">
			<div className="left-screen">
				<div className="caption">
					<h3>
						Emergency Alert <span>!</span>
					</h3>
					<p>With a single click, A road worden would attend to your emergency</p>
					<p className="tips">
						<span className="bar">|</span> Accident <span className="bar">|</span> Robery{' '}
						<span className="bar">|</span> Car Breakdown
					</p>
					<div className="btns">
						<Button className="custom-btn">Send an Alert</Button>
						<h6>Or</h6>
						<Button className="custom-btn outline">View Road Info</Button>
					</div>
				</div>
				<div className="blob">
					<img src={blobImg} alt="blob" />
				</div>
			</div>
			<div className="right-screen">
				<div className="carImg">
					<img src={carImg} alt="car" />
				</div>
			</div>
		</div>
	</div>
);

export default LandingPage;
