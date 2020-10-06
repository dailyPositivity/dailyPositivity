import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Home extends Component{
   render() {
      return(
         <div className = "wrapper">
            <div className = "homeContainer">
               <div className="titleContainer">
                  <h1>Daily <span>Positivity</span></h1>
               </div>
               <p>Find your positive vibes.</p>
               <Link to = "/category">
                  <button className = "startButton">
                     <i className="fa fa-chevron-down"></i>
                  </button>
               </Link> 
            </div>
         </div>
      )
   }
}

export default Home;