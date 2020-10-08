import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import { HashRouter as Router, Route  } from 'react-router-dom';

// Components
import Category from './components/Category';
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

         // store the image info as an array in the state
         this.setState({
            imageArray: results,
         })
      })
   }
   
   // used to save the current value of text input fields to the state
   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   // request quotes from Quotable API and combine with user-inputted quotes
   getQuotes = () => {
      // create array of non-empty quotes inputted by user
      const { userQuote1, userQuote2, userQuote3 } = this.state;
      const userQuotes = [userQuote1, userQuote2, userQuote3].filter((quote) => quote.length > 0);

      // generate a number to randomize the quotes we receive
      const random = Math.floor(Math.random() * 1000);

      // request 10 quotes from quotable
      axios({
         url: `https://api.quotable.io/quotes?limit=${10 - userQuotes.length}&skip=${random}`
      })
      .then((response) => {
         // filter out the quotes from the responses
         const results = response.data.results.map((quoteObject) => {
            return quoteObject.content;
         })

         // store the quotes as an array in the state
         this.setState({
            quoteArray: userQuotes.concat(results),
         })
      })
   }

   render(){
      return (
         <Router basename="/">
            {/* header: present on every route */}
            <header>
               <Header />
            </header>

            {/* main section */}
            <main>
               <div className="App">
                  <Route exact path = "/" component = {Home}/>
                  <Route exact path = "/category">
                     <Category handleSelect={this.getImages} />
                  </Route>
                  <Route exact path = "/category/:categoryName">
                     <Form submitHandler={this.handleSubmit} changeHandler={this.handleChange} />
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

            {/* footer: present on every route */}
            <footer>
               <Footer/>
            </footer>
         </Router>
       );
   }
}

export default App;
