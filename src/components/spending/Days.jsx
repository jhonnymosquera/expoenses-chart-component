import { useContext, useState } from 'react';
import { Context } from '../../context/Context';

function Days({ days }) {
	const { day, amount, getDay } = days;
	const { hoy } = useContext(Context);
	const [barState, setBarState] = useState('');

	const bar = getDay === hoy ? true : null;

	return (
		<div className="day">
			<div className={`barra-hover ${barState}`}>{`$${amount}`} </div>

			<div
				onMouseOver={() => setBarState('bar-active')}
				onMouseOutCapture={() => setBarState('')}
				className={`barra ${bar ? 'maxAmount' : ''}`}
				style={{ height: amount * 3.7 }}
			></div>

			<p>{day}</p>
		</div>
	);
}

export default Days;
