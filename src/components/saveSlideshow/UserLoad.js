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
      // firebase.auth().signInAnonymously().catch(function(error) {
      //    const errorCode = error.code;
      //    const errorMessage = error.message;
      //  });
       firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           const uid = user.uid;
            this.setState({
               userId: uid,
            }
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
   
   handleRemove = (slideshowData) => {
      // 8.5 delete book from firebase
      console.log(slideshowData);
   }
   
   render() {
      return (
         
         <div className="loadSlides">
            <ul>
           <h1>Bookshelf</h1>
           {
              //4.0 display books here adding this.state.books.map
              this.state.books.map((book) =>{
                 return(
                    <li key={slideshowData.key}>
                       <p>{slide.images} - {slide.quotes}</p>
                       {/* 8.2 add onclick to button */}
                       <button onClick={this.handleRemove(slideshowData.key)}><span role="img" aria-label="delete emoji">🆇</span></button>
                       {/* 8.3 go to top of render */}
                    </li>
                  // 7.2 add book.title to add key value to children
                  //   <li>
                  //      <p>{book}</p>
                  //   </li>
                 )
              })
         // 4.2 create form for user input
           }
           <form action="submit">
              <label htmlFor="newBook">Add new book: </label>
              {/* 
              // 4.3 trigger .on change 
              // 4.4 if user adds data, add onChange
              // 4.5 set default value to be this.state.userInput 
              // 4.6 add handlechange event listener above render
              */}
               <input type="text" id="newBook" onChange={this.handleChange} value={this.state.userInput} />
               {/* 
               // 6.1 if button is clicked
               // 6.2 use onClick={...} and add function inside called handleClick
               // 6.3 go up to render
                */}
               <button onClick={this.handleClick} className="loadBtn">Load Slideshow</button>
           </form>
           </ul>
         </div>
         )
   }
}

export default UserLoad;