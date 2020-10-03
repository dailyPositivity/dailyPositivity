import React, { Component } from 'react';
import categoryList from '../categoryList';



class Form extends Component{
   constructor(){
      super();
      this.state = {
         category: {},
      }
   }
   componentDidMount(){
      const slideType = this.props.match.params.categoryName;
      console.log(categoryList)
      categoryList.forEach( category =>{
         if (category.name === slideType){
            console.log(category)
            this.setState({
               category: category
            })
         }
      })
   }
   render(){
      const {name, path} = this.state.category;
      return(
         <div>
            <div className="slidePreview">
               <h2>{name}</h2>
               <div className="slideImgContainer">
                  <img src={path}/>
               </div>
            </div>
         </div>
      )
   }
}

export default Form;