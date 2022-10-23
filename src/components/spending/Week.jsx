import { useContext } from 'react';
import { Context } from '../../context/Context';
import Days from './Days';

function Week() {
	const { weekInfo } = useContext(Context);

	return (
		<div className="week">
			{weekInfo.map((days) => (
				<Days key={days.day} days={days} />
			))}
		</div>
	);
}

export default Week;
