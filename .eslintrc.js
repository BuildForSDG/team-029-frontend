module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true
	},
	extends: [ 'airbnb-base', 'eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react' ],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'comma-dangle': [ 'error', 'never' ],
		'no-param-reassign': [ 'error', { props: false } ],
		'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ]
	}
};
