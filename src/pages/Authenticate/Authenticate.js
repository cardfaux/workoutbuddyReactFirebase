import React from 'react';
import styled from 'styled-components';

import SignIn from '../../components/Authenticate/SignIn';

const Authenticate = (props) => {
	return (
		<div className={props.className}>
			<SignIn />
		</div>
	);
};

export default styled(Authenticate)``;
