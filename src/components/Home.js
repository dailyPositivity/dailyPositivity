import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Home extends Component{
   render(){
      return(
         <div className = "wrapper">
            <div className = "homeContainer">
               <h1>Home Component</h1>
            </div>
            <div>
               <Link to = "/category">
                  <button>
                     <i className="fa fa-chevron-down"></i>
                  </button>
               </Link> 
            </div>
         </div>
      )
   }
}

export default Home;