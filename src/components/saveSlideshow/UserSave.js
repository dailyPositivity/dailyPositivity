import React, { Component } from 'react';
import firebase from './firebase.js';


class UserSave extends Component {
   constructor(){
      super();
      this.state = {
         userId: "",
      }
   }
   componentDidMount(){
      // firebase.auth().signInAnonymously().catch(function(error) {
      //    const errorCode = error.code;
      //    const errorMessage = error.message;
      //  });
       firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           // User is signed in.
         //   const isAnonymous = user.isAnonymous;
           const uid = user.uid;
            this.setState({
               userId: uid,
            }
            // Check if auth key works 
            , () => console.log(this.state.userId)
            )
         } 
       });
   }
   handleChange = (event) => {
      this.setState({
         userSlideshow: event.target.value
      }) 
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
         <div className="saveSlides">           
            <button onClick={this.handleClick} className="saveBtn">Save Slideshow</button>
         </div>
      )
   }
   
}

export default UserSave;