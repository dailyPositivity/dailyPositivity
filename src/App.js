import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
// Components
import Category from './components/Category';
import Ending from './components/Ending';
import Form from './components/Form';
import Home from './components/Home';
import Slideshow from './components/Slideshow';

class App extends Component {
   render(){
      return (
         <Router>
            <div className="App">
               <h1>App.js Test</h1>
               <Route exact path = "/" component = {Home}/>
               <Route exact path = "/" component = {Home}/>
               <Route exact path = "/" component = {Home}/>
            </div>
         </Router>
       );
   }
}

export default App;

// Form.js
// Slideshow.js
// Ending.js