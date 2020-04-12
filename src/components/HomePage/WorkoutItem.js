import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WorkoutItem = (props) => {
	return (
		<div className={props.className}>
			<div
				className='outterbox'
				style={{
					backgroundImage: `url(${props.imageUrl})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			>
				<button>
					<Link to={props.linkUrl}>{props.title}</Link>
				</button>
			</div>
		</div>
	);
};

export default styled(WorkoutItem)`
	.outterbox {
		border: 1px solid black;
		padding: 3em;
		margin: 3em;
		width: 40rem;
		height: 20rem;
		text-align: center;
	}
	button {
		cursor: pointer;
		border: inherit;
		background-color: #000;
		padding: 0.5rem;
		> a {
			text-decoration: none;
			color: white;
			font-size: 1.3rem;
		}
	}
`;
