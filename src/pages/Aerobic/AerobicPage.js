import React from 'react';

import AerobicList from '../../components/Aerobic/AerobicList';

const HomePage = () => {
	return (
		<div style={{ textAlign: 'center', color: 'white' }}>
			<h1>Choose An Aerobic Type</h1>
			<AerobicList />
		</div>
	);
};

export default HomePage;
