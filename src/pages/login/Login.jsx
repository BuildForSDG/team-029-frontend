import React from 'react';
import Button from '../../components/button/Button.jsx';
import Input from '../../components/input/Input.jsx';
import Header from '../../components/header/Header.jsx';

import './Login.styles.scss';

const Login = () => {
	return (
		<div className="login-page-wrapper">
			<form className="login-form">
				<Header title="Sign In" />
				<Input label="Email or Staff ID" inputType="text" placeholder="your mail or staff ID" />
				<Input label="Your password" inputType="password" placeholder="provide a password" />
				<Button>Login</Button>
				<p className="reset-password">Reset password?</p>
			</form>
		</div>
	);
};

export default Login;
