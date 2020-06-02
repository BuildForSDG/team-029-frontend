import React from 'react';
import { string } from 'prop-types';

const Home = ({ pageName }) => {
	return (
		<div>
			<h3 style={{ margin: 0 }}>This is the {pageName} page</h3>
		</div>
	);
};

Home.propTypes = {
	pageName: string.isRequired
};

Home.displayName = 'Home';

export default Home;
