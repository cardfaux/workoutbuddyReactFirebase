import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import AerobicPage from './Aerobic/AerobicPage';
import '../styles/App.css';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/aerobics' exact component={AerobicPage} />
			</Switch>
		</div>
	);
}

export default App;
