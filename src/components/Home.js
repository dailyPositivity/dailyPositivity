import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Home extends Component{
   render() {
      return(
         <div className = "wrapper">
            <div className = "homeContainer">
               <h1>Daily Positivity</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi doloribus sapiente saepe ipsum eveniet minima rem debitis eius iure explicabo consequuntur perspiciatis velit, quia error laborum expedita placeat ad voluptate rerum facere? Quaerat natus dolores delectus eveniet. Alias, minima!</p>
            </div>
            <div>
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