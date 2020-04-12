import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebaseUtils';

const NavBar = (props) => {
	return (
		<div className={props.className}>
			<div className='logo-container'>
				<Link to='/'>WorkoutBuddy</Link>
			</div>
			<div className='options'>
				<Link className='option' to='/exercises'>
					exercises
				</Link>
				<Link className='option' to='/dashboard'>
					dashboard
				</Link>
				{props.currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						sign out
					</div>
				) : (
					<Link className='option' to='/authenticate'>
						sign in
					</Link>
				)}
			</div>
		</div>
	);
};

export default styled(NavBar)`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	background-color: black;
	.logo-container {
		height: 100%;
		width: 70px;
		padding-left: 5rem;
		padding-top: 1.5rem;
		> a {
			color: white;
		}
	}
	.options {
		height: 100%;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 5rem;
		> a {
			color: white;
		}

		.option {
			padding: 10px 15px;
			cursor: pointer;
			color: white;
		}
	}
`;
