import React, { useState } from 'react';
import styled from 'styled-components';

import WorkoutItem from './WorkoutItem';

const WorkoutList = (props) => {
	const [state, setState] = useState({
		sections: [
			{
				title: 'Aerobic',
				image: 'https://i.ytimg.com/vi/tyB2QCc-l2M/maxresdefault.jpg',
				linkUrl: '/aerobics',
				id: 1,
			},
			{
				title: 'Strength',
				image: 'http://www.theworkoutwarehouse.net/images/Weight-Training.jpg',
				linkUrl: '/strength',
				id: 2,
			},
			{
				title: 'Stretching',
				image:
					'https://media.self.com/photos/5a305b43e1ef6d3e6b8801bf/4:3/w_728/2_7self.jpg',
				linkUrl: '/stretching',
				id: 3,
			},
			{
				title: ' Balance',
				image:
					'https://coolboard.co.uk/wp-content/uploads/2017/06/core-plank-coolboard-balance-board-wobble-board-exercise-fitness-workout-right.jpg',
				linkUrl: '/balance',
				id: 4,
			},
		],
	});

	return (
		<div className={props.className}>
			{state.sections.map((section) => (
				<WorkoutItem
					key={section.id}
					title={section.title}
					imageUrl={section.image}
					linkUrl={section.linkUrl}
				/>
			))}
		</div>
	);
};

export default styled(WorkoutList)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
