import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './styles/globals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Normalize />
		<App />
		<GlobalStyles />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
