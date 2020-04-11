import React from 'react';

import WorkoutList from '../../components/HomePage/WorkoutList';

const HomePage = () => {
	return (
		<div style={{ textAlign: 'center', color: 'white' }}>
			<h1>Choose A Workout Type</h1>
			<WorkoutList />
		</div>
	);
};

export default HomePage;
