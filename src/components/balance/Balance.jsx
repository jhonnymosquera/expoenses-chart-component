import logo from '../../assets/logo.svg';

function Balance() {
	return (
		<div className="balance">
			<div>
				<p>My balance</p>
				<h3>$921.48</h3>
			</div>

			<div>
				<img src={logo} alt="logo" />
			</div>
		</div>
	);
}

export default Balance;
