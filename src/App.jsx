import './App.css';
import Balance from './components/balance/Balance';
import Spending from './components/spending/Spending';

function App() {
	return (
		<div className="contenedor">
			<Balance />
			<Spending />
		</div>
	);
}

export default App;
