import React, { Component } from 'react';
import firebase from './firebase.js';


class SaveSlideshow extends Component {
   constructor(){
      super();
      this.state = {
         userId: "",
      }
   }

   componentDidMount(){
      firebase.auth().signInAnonymously().catch(function(error) {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         // ...
       });
       firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           // User is signed in.
           const isAnonymous = user.isAnonymous;
           const uid = user.uid;
            this.setState({
               userId: uid,
            }
            // This is auth key
            // , () => console.log(this.state.userId)
            )
         } else {
           // User is signed out.
           // ...
         }
         // ...
       });
   }

   handleChange = (event) => {
      this.setState({
         userSlideshow: event.target.value
      }
      ) 
   }

   handleClick = (event) => {
      // add slideshow quotes and images (refer to Slideshow.js)
      const images = this.props.images;
      const quotes = this.props.quotes;
      // make slideshow into object
      const userSlideshow = {images:images,quotes:quotes}
      event.preventDefault();
      const dbRef = firebase.database().ref();
      // use set() to allow custom saves
      dbRef.child(this.state.userId).push(userSlideshow);
   }

   
   render() {
      return (
         <div className="saveBtns">           
           <div className="endingSlide">
               <h2 className="endingMessage">Thank you for watching</h2> 
            </div>
            <button onClick={this.handleClick} className="saveBtn">Save Slideshow</button>
            <button className="replayBtn">Replay Slideshow</button>
            <button className="loadSlideshow">Load Slideshow</button>
         </div>
      )
   }
   
}

export default SaveSlideshow;