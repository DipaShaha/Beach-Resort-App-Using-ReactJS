import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import {Link} from 'react-router-dom';
const Home=()=>{
    return (
    	<React.Fragment>
        	<Hero >
		        <Banner title="luxurious rooms" subtile="delux rooms starting at $333">
		        	<Link to="/rooms" className="btn-primary">
		        	Our Rooms
		        	</Link>
		        </Banner>
        	</Hero>

        	<Services/>
        </React.Fragment>
    );
}

export default Home;
