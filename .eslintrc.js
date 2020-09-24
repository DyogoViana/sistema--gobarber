module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'prettier/react',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		'no-console': ['error', { allow: ['tron'] }],
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'global-require': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.js', '.jsx'] },
		],
		'react/jsx-one-expression-per-line': 'off',
		'react-native/no-raw-text': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		camelcase: 'off',
	},
	settings: {
		'import/resolver': {
			'babel-plugin-root-import': {
				rootPathSuffix: 'src',
			},
		},
	},
};
