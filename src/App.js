import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import histoy from './services/history';

function App() {
	return (
		<Router history={histoy}>
			<Routes />
		</Router>
	);
}

export default App;
