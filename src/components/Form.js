import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import categoryList from '../categoryList';
import InputQuote from './InputQuote';

class Form extends Component{
   getCategoryImagePath(){  
      const filteredCategory = categoryList.filter((category) => {
            return(category.name === this.props.match.params.categoryName);
         })
      return filteredCategory[0];
   }

   /*-----------------------------------Submit handler for move to slidshow Component ----------------*/
   render(){
      //filter categoryList array as per passed in category by Category Component
      const {name,path} = {...this.getCategoryImagePath()};
      const categoryBackground = {
         backgroundImage: 'url(' + path + ')'
   }
      return (       
            <div className = "formContainer" style ={categoryBackground}>
               <div className = "categoryName">
                  <h2>{name}</h2>
               </div>             
               <form className = "categoryForm">
                  <fieldset>
                     <legend>
                        <em>Enter Your Quotes Here</em>
                     </legend>
                     <InputQuote name={"userQuote1"} changeHandler={this.props.changeHandler} placeholder={"Add up to 3 of your own quotes."} />
                     <InputQuote name={"userQuote2"} changeHandler={this.props.changeHandler} placeholder={"We'll include them in your slideshow."} />
                     <InputQuote name={"userQuote3"} changeHandler={this.props.changeHandler} placeholder={"Click the button when you're ready!"} />
                     <Link to={`/category/${name}/slideshow`}>
                        <button type="button" className = "slideshowStartBtn" onClick={this.props.slide}>
                           Start Slideshow
                        </button>
                     </Link>
                  </fieldset>
               </form>
         </div>
      )
   }
}

export default withRouter(Form);