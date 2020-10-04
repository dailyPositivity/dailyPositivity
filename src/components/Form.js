import React, { Component } from 'react';
import categoryList from '../categoryList';
class Form extends Component{
   constructor(){
      super();
      this.state = {
         categoryName:'',
         quote1:'',
         quote2:'',
         quote3:''
      }
   }

   getCategoryImagePath(){  
      const filteredcategory = categoryList.filter((category) => {
            return(category.name === this.state.categoryName);
         })
      return filteredcategory[0];
   }

   /*----------------------------------------Change handler for user enterd Quotes--------------------*/
   changeHandler = (event) => {
      this.setState({
         [event.target.name]:event.target.value
      });
   }

   /*-----------------------------------Submit handler for move to slidshow Component ----------------*/
   componentDidMount(){
      //update state with  in category name parameter passed in by Category Component
      this.setState({
         categoryName: this.props.match.params.categoryName
      })
   }
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
               <form onSubmit = {(event) => {this.props.formSubmitHandler(event,{...this.state})}}>
                  <div className = "noteTextArea">
                        <label htmlFor = "quote1" className="visuallyHidden">Enter content for the entry</label>
                        <textarea  id = "quote1" name = "quote1" value = {this.state.quote1}  placeholder = "add your quote here" onChange = {this.changeHandler}/>    
                  </div>
                  <div className = "noteTextArea">
                        <label htmlFor = "quote2" className="visuallyHidden">Enter content for the entry</label>
                        <textarea  id = "quote2" name = "quote2" value = {this.state.quote2}  placeholder = "add your quote here" onChange = {this.changeHandler}/>    
                  </div>
                  <div className = "noteTextArea">
                        <label htmlFor = "quote3" className="visuallyHidden">Enter content for the entry</label>
                        <textarea  id = "quote3" name = "quote3" value = {this.state.quote3}  placeholder = "add your quote here" onChange = {this.changeHandler}/>    
                  </div>
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

export default Form;