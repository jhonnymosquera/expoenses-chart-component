import Month from './month';
import Week from './Week';

function Spending() {
	return (
		<div className="spending">
			<h1>Spending - Last 7 days </h1>

			<Week />
			<Month />
		</div>
	);
}

export default Spending;
