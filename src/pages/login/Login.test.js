import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Login from './Login.jsx';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'

afterEach(cleanup);

it('Should render <Login /> page component', () => {
	const mockedHistory = {
		push: () => { }
	}
	const { asFragment } = render(
		<Provider store={store}>
			<Login history={mockedHistory} />
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
