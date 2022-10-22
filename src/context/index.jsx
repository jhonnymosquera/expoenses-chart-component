import { Context } from './Context';
import { useState } from 'react';
import data from '../data/data.json';

function ContexProvider(props) {
	const [weekInfo, setWeekInfo] = useState(data);

	const amounsts = weekInfo.map((day) => day.amount);
	const maxAmount = Math.max(...amounsts);

	const time = Date.now();
	const hoy = new Date(time).getDay() - 1;

	return (
		<Context.Provider value={{ weekInfo, setWeekInfo, maxAmount, hoy }}>
			{props.children}
		</Context.Provider>
	);
}

export default ContexProvider;
