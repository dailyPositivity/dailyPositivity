import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import categoryList from '../categoryList';

class Category extends Component{
   render(){
      const categories = categoryList;
      return(
         <div className = "wrapper">
            <h1>Pick Category</h1>
            <div className = "categoryContainer">
               {  categories.map((category,index) => {
                     return (
                        <Link to = {`/category/:${category}`}>
                           <div key = {index}>
                              <div className = "categoryImg">
                                 <img src={category.path} alt = {category.description}/>
                              </div>
                              <h3>{category.name}</h3>
                           </div>
                        </Link>
                     )
                  })
               }
            </div>
         </div>
      )//End of return
   }//End of render()
}

export default Category;