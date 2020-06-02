import React from 'react';
import Page from './content/Home/Home.jsx';

export default [
	{
		path: '/dashboard',
		active: 'Dashboard',
		name: 'Dashboard',
		exact: true,
		main: () => <Page pageName="Home" />
	},
	{
		path: '/dashboard/worden',
		active: 'worden',
		name: 'Road Wordens',
		main: () => <Page pageName="Road Worden" />
	},
	{
		path: '/dashboard/emergency-tip',
		active: 'emergencyTips',
		name: 'Emergency Tips',
		main: () => <Page pageName="Emergency Tips" />
	},
	{
		path: '/dashboard/road',
		active: 'road',
		name: 'Road',
		main: () => <Page pageName="Road" />
	},
	{
		path: '/dashboard/profile',
		name: 'Profile',
		active: 'profile',
		main: () => <Page pageName="Profile" />
	}
];
