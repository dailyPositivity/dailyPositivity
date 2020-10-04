import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
// Components
import Category from './components/Category';
import Ending from './components/Ending';
import Form from './components/Form';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
   
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
               <Header />
            </header>
            <main>
               <div className="App">
                  <Route exact path = "/" component = {Home}/>
                  <Route exact path = "/category" component = {Category}/>
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