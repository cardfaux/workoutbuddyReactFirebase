import React from 'react';

import WorkoutList from '../../components/HomePage/WorkoutList';

const HomePage = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Choose A Workout Type</h1>
			<WorkoutList />
		</div>
	);
};

export default HomePage;
