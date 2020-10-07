import React, { Component } from 'react';
import Save from './saveSlideshow/SaveSlideshow.js';

class Ending extends Component{
   render(){
      return(
         <div className="wrapper">
            <div className="endingSlide">
               <h2 className="endingMessage">Thank you for watching</h2>    
            </div>
         </div>
      )
   }
}

export default Ending;