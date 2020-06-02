import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import AppSpinner from '../../components/appSpinner/AppSpinner.jsx';
import Button from '../../components/button/Button.jsx';
import Input from '../../components/input/Input.jsx';
import Header from '../../components/header/Header.jsx';
import Alert from '../../components/alert/Alert.jsx';
import { loginUser as loginUserAction, clearError as clearErrorAction } from '../../redux/users/userAction';

import './Login.styles.scss';

const Login = ({ loginUser, userState, clearError, history }) => {
	const [formInput, setFormInput] = useState({
		email: '',
		password: ''
	})
	const { loginLoading, error } = userState;

	useEffect(() => {
		const { token } = userState;
		if (token) {
			return history.push("/dashboard");
		}
		return () => { }
	}, [userState])

	const onFormInputChange = (e) => {
		const { name, value } = e.target;
		return setFormInput({ ...formInput, [name]: value });
	}
	const onFormSubmit = (e) => {
		e.preventDefault();
		return loginUser(formInput);
	}

	return (
		<div className="login-page-wrapper">
			<form onSubmit={onFormSubmit} className="login-form">
				<Header title="Sign In" />
				{loginLoading && <AppSpinner />}
				{!loginLoading && error && (
					<Alert
						type="error"
						onClose={clearError}
						message="Invalid email or password"
						iconName="exclamation triangle"
					/>
				)}
				<Input
					onChange={onFormInputChange}
					inputName="email"
					label="Email or Staff ID"
					value={formInput.email}
					inputType="text"
					placeholder="your mail or staff ID"
				/>
				<Input
					label="Your password"
					inputName="password"
					inputType="password"
					placeholder="provide a password"
					onChange={onFormInputChange}
					value={formInput.password}
				/>
				<Button>Login</Button>
				<p className="reset-password">Reset password?</p>
			</form>
		</div>
	);
};

Login.propTypes = {
	loginUser: func.isRequired,
	userState: object.isRequired,
	clearError: func.isRequired,
	history: object.isRequired
}

const mapStateToProps = state => ({
	userState: state.user
});

const mapDispatchToProps = {
	loginUser: loginUserAction,
	clearError: clearErrorAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
