import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {RoomProvider} from './Context';
import App from './App';


ReactDOM.render(
	<RoomProvider>
		<Router>
			<App />
		</Router>
	</RoomProvider>,
 	document.querySelector('#root')

 );

