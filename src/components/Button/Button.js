import React from 'react';
import styled from 'styled-components';

const Button = ({ className, isGoogle, children, ...otherProps }) => {
	return (
		<div className={className}>
			<button
				className={`${isGoogle ? `google-button` : ``} button`}
				{...otherProps}
			>
				{children}
			</button>
		</div>
	);
};

export default styled(Button)`
	.button {
		min-width: 165px;
		width: auto;
		height: 50px;
		line-height: 50px;
		padding: 0 35px 0 35px;
		font-size: 15px;
		background-color: black;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		border: none;
		cursor: pointer;

		&:hover {
			background-color: white;
			color: black;
			border: 1px solid black;
		}

		&.google-button {
			background-color: #4285f4;
			color: white;

			&:hover {
				background-color: #db4437;
				border: none;
			}
		}
	}
`;
