import React from 'react';
import styled from 'styled-components';

const FormInput = ({ className, handleChange, label, ...props }) => {
	return (
		<div className={className}>
			<div className='form-group'>
				<input
					className='form-input'
					placeholder={label}
					onChange={handleChange}
					{...props}
				/>
				{/* {label ? <label className={`form-input-label`}>{label}</label> : null} */}
			</div>
		</div>
	);
};

export default styled(FormInput)`
	.form-group {
		position: relative;
		margin: 45px 0;
		.form-input {
			padding: 10px 10px 10px 5px;
			display: block;
			width: 100%;
			border: none;
			border-bottom: 1px solid black;
		}
		/* .form-input-label {
			color: grey;
			position: absolute;
			left: 5px;
			top: 10px;
		} */
	}
`;
