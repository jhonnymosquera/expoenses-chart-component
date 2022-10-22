import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContexProvider from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ContexProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ContexProvider>
);
