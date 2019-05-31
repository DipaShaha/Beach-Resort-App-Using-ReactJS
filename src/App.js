import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';


const App =()=>{

    return(
    	<div>
    		<Navbar/>
    		<Switch>
		        <Route exact path="/" component={Home} />
		        <Route  path="/rooms/" component={Rooms} />
		        <Route  path="/single-room" component={SingleRoom} />
		        <Route component={Error} />
        	</Switch>
    	</div>
    );
}

export default App;
