import React, { Component } from 'react';
import Category from './Category';


class Home extends Component{
   render(){
      return(
         <Router>
            <h1>Home Component</h1>
            <Route exact path = "/" component = {Category}/>
            
         </Router>
      )
   }
}

export default Home;