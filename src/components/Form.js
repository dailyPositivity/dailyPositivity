import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      const {name,path,description} = {...this.getCategoryImagePath()};

      return(
         <div className = "categoryFormContainer">
             <div className = "categoryFormImg">
               <img src = {path} alt = {description}/>
               <h3>{name}</h3>
             </div>
             <div className = "categoryForm">
               <form onSubmit={this.props.submitHandler}>
                  <InputQuote name={"userQuote1"} changeHandler={this.props.changeHandler} />
                  <InputQuote name={"userQuote2"} changeHandler={this.props.changeHandler} />
                  <InputQuote name={"userQuote3"} changeHandler={this.props.changeHandler} />
                  <div className = "noteComposeButton" aria-label="submit button to save the  note entry">
                  <button>
                        Submit
                  </button>               
                  </div>
               </form>
             </div>
         </div>
      )
   }
}

export default withRouter(Form);