import React, { Component } from 'react';
import firebase from './firebase';


class UserLoad extends Component {
   constructor(){
      super();
      this.state = {
         userId: "",
      }
   }

   componentDidMount(){
         // grab data from firebase
      const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
         console.log(response.val())
         const data = response.val();
         
      });
   }

   handleClick(){

   }

   render() {
      return (
         <div className="loadSlides">
            <button onClick={this.handleClick} className="loadBtn">Load Slideshow</button>
         </div>
      )
   }
}

export default UserLoad;