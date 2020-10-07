import React, { Component } from 'react';
import firebase from './firebase.js';


class SaveSlideshow extends Component {
   constructor(){
      super();
   }
   componentDidMount() {
      // Connect Firebase
      
   }

   handleChange = (event) => {
      this.setState({
         userSlideshow: event.target.value
      })
   }

   handleClick = (event) => {
      const images = this.props.images;
      const quotes = this.props.quotes;
      const userSlideshow = {images:images,quotes:quotes}
      event.preventDefault();
      const dbRef = firebase.database().ref();
      dbRef.set(userSlideshow);
      console.log(userSlideshow);
   }

   render() {
      return (
         <div className="saveBtns">
            <button onClick={this.handleClick} className="saveBtn">Save Slideshow</button>
            <button className="replayBtn">Replay Slideshow</button>
            <button className="loadSlideshow">Load Slideshow</button>
         </div>
      )
   }
}

export default SaveSlideshow;