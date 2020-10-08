import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import { HashRouter as Router, Route  } from 'react-router-dom';
// Components
import Category from './components/Category';
import Ending from './components/Ending';
import Form from './components/Form';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
   constructor() {
      super();
      this.state = {
         imageArray: [],
         quoteArray: [],
         userQuote1: '',
         userQuote2: '',
         userQuote3: '',
         headerClass: 'headerContainer',
      }
   }

   // request images of a certain category from Unsplash API
   getImages = (category) => {
      axios({
         url: 'https://api.unsplash.com/search/photos',
         params: {
            client_id: 'UXdr3j-2x0CZ4juRAeome9itr5n0Igi-ddjbE3gjO-A',
            query: category,
            orientation: 'landscape',
         }
      })
      .then((response) => {
         const results = response.data.results.map((obj) => {
            // capture the important values from the Unsplash response
            return {
               url: obj.urls.regular,
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
   
   // handleChange
   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   // request quotes from Quotable API and combine with user-inputted quotes
   getQuotes = () => {
      // create array of non-empty quotes inputted by user
      const { userQuote1, userQuote2, userQuote3 } = this.state;
      const userQuotes = [userQuote1, userQuote2, userQuote3].filter((quote) => quote.length > 0)

      axios({
         url: `https://api.quotable.io/quotes?limit=${10 - userQuotes.length}`
      })
      .then((response) => {
         const results = response.data.results.map((quoteObject) => {
            /* TODO: decide if we want to include author,
                     and if so, how to handle user-inputted quotes (author field?) */
            return quoteObject.content;
         })
         this.setState({
            /* TODO: decide if we want to shuffle the quote array
                     or have userQuotes at fixed positions */
            quoteArray: userQuotes.concat(results),
         })
      })
   }
   headerChange = () => {
      this.setState({
         headerClass: "headerContainer slideContainer",
      })
   }
   headerRevert = () => {
      this.setState({
         headerClass: "headerContainer",
      })
   }


   render(){
      return (
         <Router basename="/">
            <header>
               {/* header Component  to shown on every spage */}
               <Header class={this.state.headerClass} revert={this.headerRevert} />
            </header>
            <main>
               <div className="App">
                  <Route exact path = "/" component = {Home}/>
                  <Route exact path = "/category">
                     <Category handleSelect={this.getImages} />
                  </Route>
                  <Route exact path = "/category/:categoryName">
                     <Form submitHandler={this.handleSubmit} changeHandler={this.handleChange} slide={
                        this.headerChange} />
                  </Route>
                  <Route exact path="/category/:categoryName/slideshow">
                     <Slideshow
                        images={this.state.imageArray}
                        quotes={this.state.quoteArray}
                        getImages={this.getImages}
                        getQuotes={this.getQuotes}
                     />
                  </Route>
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
