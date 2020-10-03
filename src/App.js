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

class App extends Component {
   render(){
      return (
         <Router>
            <header>
               {/* header Component  to shown on every spage */}
               
            </header>
            <main>
               <div className="App">
                  <Route exact path = "/" component = {Home}/>
                  <Route exact path = "/category" component = {Category}/>
                  <Route exact path = "/category/:categoryName" component = {Form}/>
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