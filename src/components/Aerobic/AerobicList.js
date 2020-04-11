import React, { useState } from 'react';
import styled from 'styled-components';

import AerobicItem from './AerobicItem';

const AerobicList = (props) => {
	const [state, setState] = useState({
		sections: [
			{
				title: 'Home',
				image: 'https://i.ytimg.com/vi/u4kZumpBvzE/hqdefault.jpg',
				id: 1,
			},
			{
				title: 'Gym',
				image:
					'https://www.bodybuilding.com/images/2016/july/10-best-and-worst-cardio-machines-header-v2-960x540.jpg',
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
