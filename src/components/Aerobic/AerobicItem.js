import React from 'react';
import styled from 'styled-components';

const AerobicItem = (props) => {
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
					<p>{props.title}</p>
				</button>
			</div>
		</div>
	);
};

export default styled(AerobicItem)`
	.outterbox {
		border: 1px solid black;
		padding: 3em;
		margin: 3em;
		width: 30rem;
		height: 10rem;
		text-align: center;
	}
	button {
		cursor: pointer;
		border: inherit;
		background-color: #000;
		padding: 0.5rem;
		> p {
			color: white;
			font-size: 1.3rem;
		}
	}
`;
