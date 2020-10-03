import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
// Components
import Category from './components/Category';
import Ending from './components/Ending';
import Form from './components/Form';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';

class App extends Component {
   constructor() {
      super();
      this.state = {
         imageArray: [],
      }
   }

   // request images of a certain category from Unsplash API
   getImages = (category) => {
      axios({
         url: 'https://api.unsplash.com/search/photos',
         params: {
            client_id: 'UXdr3j-2x0CZ4juRAeome9itr5n0Igi-ddjbE3gjO-A',
            query: category,
         }
      })
      .then((response) => {
         const results = response.data.results.map((obj) => {
            // capture the important values from the Unsplash response
            return {
               url: obj.urls.full,
               alt: obj.alt_description,
               id: obj.id,
               photographer: obj.user.name,
            }
         })
         this.setState({
            imageArray: results,
         })
      })
   }
   
   /*------------------------handle submit button functionality for Form Component----------*/
   /*-----------------------Get details like quotes enterd by user and category name---------*/
   submitHandler = (event,categoryDetails) => {
      event.preventDefault();
      // Added logic to get API details.....filter the quotes...
      console.log(categoryDetails);//contains Categoey name and Qotes details entered by user
   }

   render(){
      return (
         <Router>
            <header>
               {/* header Component  to shown on every spage */}
            </header>
            <main>
               <div className="App">
                  <Route exact path = "/" component = {Home}/>
                  <Route exact path = "/category">
                     <Category handleSelect={this.getImages} />
                  </Route>
                  <Route exact path = "/category/:categoryName" render = {(props) => {
                     return(
                        <Form {...props} formSubmitHandler = {this.submitHandler}/>
                     )
                  }}
                  />
               </div>
            </main>
            <footer>
               {/* footer component to be shown on every page */}
               <Footer/>
            </footer>
         </Router>
       );
   }
}

export default App;

// Form.js
// Slideshow.js
// Ending.js