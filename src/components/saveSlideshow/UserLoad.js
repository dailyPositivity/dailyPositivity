import React, { Component } from 'react';
import firebase from './firebase';

class UserLoad extends Component {
   constructor(){
      super();
      this.state = {
         slideshowData: [],
      };
   }

   componentDidMount(){
         // grab data from firebase
      const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
         const data = response.val();
         console.log(data)
         const slideshowData = [];
      });
   }

   handleClick(){
   }

// create a option 
   render() {
      return (
         <div className="loadSlides">
            {this.props.data.map((data) => {
               return(
                  <div className="container">
                     <button onClick={this.handleClick} className="loadBtn">Load Slideshow</button>
                  </div>
               )
            })}
         </div>
      )
   }
}

export default UserLoad;