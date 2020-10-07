import React, { Component } from 'react';
// import Firebase from './firebase.js';

class SaveSlideshow extends Component{
   render(){
      return(
         <div className="saveBtns">
            <button className="saveBtn">Save Slideshow</button>
            <button className="replayBtn">Replay Slideshow</button>
         </div>
      )
   }
}

export default SaveSlideshow;