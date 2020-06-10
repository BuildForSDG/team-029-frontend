import React from 'react';
import { Card } from 'semantic-ui-react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../../../components/header/Header';
import EmergecyCard from '../../../../components/emergencyCard/EmergencyCard.jsx';

import './home.styles.scss';
const Home = ({ pageName, emergencyState }) => {
	const { reports } = emergencyState;
	return (
		<div className="home">
			<Header title="Dashboard" headingSyle="header-home" underlineStyle="header-underline" />
			<div className="alerts">
				<h3>Emergency Reports</h3>
				{
					reports.map((report, idx) => (
						<h1 key={idx}>
							<EmergecyCard report={report} />
						</h1>
					))
				}
			</div>
		</div>
	);
};

Home.propTypes = {
	pageName: string.isRequired
};

Home.displayName = 'Home';

const mapStateToProps = state => ({
	emergencyState: state.emergency
})

export default connect(mapStateToProps, null)(Home);
