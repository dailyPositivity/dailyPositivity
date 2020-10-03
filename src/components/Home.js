import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Home extends Component{
   render(){
      return(
         <div className = "wrapper">
            <h1>Home Component</h1>
            <Link to = "/category">
               <button>
                  <i className="fas fa-arrow-circle-down fa-4x"></i>
               </button>
            </Link> 
         </div>
      )
   }
}

export default Home;