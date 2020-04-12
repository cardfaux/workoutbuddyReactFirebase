import React, { useState } from 'react';
import styled from 'styled-components';

import AerobicItem from './AerobicItem';

const AerobicList = (props) => {
	const [state] = useState({
		sections: [
			{
				title: 'Home',
				image:
					'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/Fibromyalgia_Exercises_You_Can_Do_At_Home_slideshow/getty_rm_photo_of_couple_getting_aerobic_exercise_from_bicycling.jpg',
				linkUrl: '/home-aerobics',
				id: 1,
			},
			{
				title: 'Gym',
				image:
					'https://www.bodybuilding.com/images/2016/july/10-best-and-worst-cardio-machines-header-v2-960x540.jpg',
				linkUrl: '/gym-aerobics',
				id: 2,
			},
		],
	});

	return (
		<div className={props.className}>
			{state.sections.map((section) => (
				<AerobicItem
					key={section.id}
					title={section.title}
					imageUrl={section.image}
				/>
			))}
		</div>
	);
};

export default styled(AerobicList)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
