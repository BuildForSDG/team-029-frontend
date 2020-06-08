import React from 'react';
import HomePage from './content/Home/Home.jsx';
import RoadPage from './content/road/Road.jsx';

export default [
	{
		path: '/dashboard',
		active: 'Dashboard',
		name: 'Dashboard',
		exact: true,
		main: () => <HomePage pageName="Home" />
	},
	{
		path: '/dashboard/worden',
		active: 'worden',
		name: 'Road Wordens',
		main: () => <h>Hello from worden page</h>
	},
	{
		path: '/dashboard/emergency-tip',
		active: 'emergencyTips',
		name: 'Emergency Tips',
		main: () => <h>Hello from emergency tips page</h>
	},
	{
		path: '/dashboard/road',
		active: 'road',
		name: 'Road',
		main: () => <RoadPage />
	},
	{
		path: '/dashboard/profile',
		name: 'Profile',
		active: 'profile',
		main: () => <h>Hello from profile</h>
	}
];
