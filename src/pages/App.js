import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Authenticate from './Authenticate/Authenticate';
import HomePage from './HomePage/HomePage';
import AerobicPage from './Aerobic/AerobicPage';
import '../styles/App.css';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/aerobics' exact component={AerobicPage} />
				<Route path='/authenticate' exact component={Authenticate} />
			</Switch>
		</div>
	);
}

export default App;
