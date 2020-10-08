import React, { Component } from 'react';
import firebase from './firebase';


class UserLoad extends Component {
   constructor(){
      super();
      this.state = {
         isEmptyState: true
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
      console.log("Load Slideshow button clicked")
   }
// create a option 
   render() {
      return (
         <div className="loadSlides">
            <div className="container">
               <button onClick={this.handleClick} className="loadBtn">Load Slideshow</button>
            </div>
         </div>
      )
   }
}

export default UserLoad;