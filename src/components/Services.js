import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktail",
                info:"Sometimes known, is dummy text used in laying out print, graphic or web designs."
            },
             {
                icon:<FaHiking/>,
                title:"Free Hiking",
                info:"Sometimes known, is dummy text used in laying out print, graphic or web designs."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Sometimes known, is dummy text used in laying out print, graphic or web designs."
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Sometimes known, is dummy text used in laying out print, graphic or web designs."
            }

        ]
    }


  render() {
    return(
        <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {this.state.services.map((item,index)=>{
                        return(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )
                    }
                )}  
            </div>
        </section>

    );
  }
}

export default Services;
