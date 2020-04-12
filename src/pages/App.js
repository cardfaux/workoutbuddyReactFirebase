import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Authenticate from './Authenticate/Authenticate';
import HomePage from './HomePage/HomePage';
import AerobicPage from './Aerobic/AerobicPage';

import { auth } from '../firebase/firebaseUtils';
import '../styles/App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<NavBar currentUser={this.state.currentUser} />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/aerobics' exact component={AerobicPage} />
					<Route path='/authenticate' exact component={Authenticate} />
				</Switch>
			</div>
		);
	}
}

export default App;
