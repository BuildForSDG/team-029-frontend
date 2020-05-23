import React from 'react';
import Button from '../../components/button/Button.jsx';
import EmergencyAlertFormModal from '../../components/emergencyAlertFormModal/EmergencyAlertFormModal.jsx';
import blobImg from '../../assets/blob.png';
import carImg from '../../assets/car.png';

import './landing.styles.scss';

const LandingPage = () => (
	<div className="landing">
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
					<EmergencyAlertFormModal />
					<h6>Or</h6>
					<Button className="outline transform">View Road Info</Button>
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
);

export default LandingPage;
