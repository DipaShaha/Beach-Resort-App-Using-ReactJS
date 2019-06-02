import React from 'react';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';

import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

import StyledHero from '../components/StyledHero';

class SingleRoom extends React.Component {

  constructor(props){
  	super(props);
    //console.log(this.props);
  	this.state={
  		slug:this.props.match.params.slug,
      defaultBcg
  	}

  }
  static contextType=RoomContext;

//component did mount
  render() {
    const {getRoom}=this.context;
    const room=getRoom(this.state.slug);
    console.log(room);
    if(!room){
      return(
        <div className="error">
          <h3>No Such Room Found!</h3>
          <Link to="/rooms" className="btn-primary">
          Back To rooms
          </Link>
        </div>
        )
    }
    const {name,description,capacity,size,price,breakfast,pets,images,extras}=room;
   
    const [mainImg,...defaultImage]=images;
    return(
      <React.Fragment>
    	  <StyledHero img={mainImg|| this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back To rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item,index)=>{
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: ${size}SQFT</h6>
              <h6>
              Max Capacity:{""}
              {capacity>1 ?`${capacity} people`:
              `${capacity} person`} 
              </h6>
              <h6>{pets?"pets allowed":"No pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
        <h6>Extras</h6>
        <ul className="">
          {extras.map((item,index)=>{
            return <li key={index}>{item} </li>
          })}
        </ul>
        </section>
      </React.Fragment>

    );
  }
}

export default SingleRoom;
