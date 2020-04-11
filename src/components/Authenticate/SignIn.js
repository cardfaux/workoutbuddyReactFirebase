import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const SignIn = (props) => {
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const onFormSubmit = (event) => {
		event.preventDefault();
		setState({ email: '', password: '' });
	};

	const onChangeHandler = (event) => {
		const { value, name } = event.target;
		setState({ [name]: value });
	};

	return (
		<div className={props.className}>
			<h1>Sign In</h1>

			<form onSubmit={onFormSubmit}>
				<FormInput
					name='email'
					type='email'
					value={state.email}
					label='email'
					handleChange={onChangeHandler}
					required
				/>

				<FormInput
					name='password'
					type='password'
					value={state.password}
					handleChange={onChangeHandler}
					label='password'
					required
				/>

				<Button type='submit'>Sign In</Button>
			</form>
		</div>
	);
};

export default styled(SignIn)`
	background-color: white;
	padding: 4rem;
	border-radius: 2rem;
	width: 30vw;
	margin-left: 5rem;
`;
