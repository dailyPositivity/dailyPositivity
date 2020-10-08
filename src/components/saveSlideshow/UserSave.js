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
      // create firebase.auth that gives each user a specific key
       firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           const uid = user.uid;
            this.setState({
               userId: uid,
            }
            )} 
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
      // use user ID as reference to save slideshow to user specified key
      dbRef.child(this.state.userId).push(userSlideshow);
   }
   render() {
      return (
         // on call 
         <div className="saveSlides">           
            <button onClick={this.handleClick} className="saveBtn">Save Slideshow</button>
         </div>
      )
   }
   
}

export default UserSave;