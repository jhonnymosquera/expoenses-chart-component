import React from 'react';

function Month() {
	return (
		<div className="month">
			<div className="this-month">
				<p>Total this month</p>
				<h2>$478.33</h2>
			</div>

			<div className="last-month">
				<p>+2.4%</p>
				<p>from last month</p>
			</div>
		</div>
	);
}

export default Month;
