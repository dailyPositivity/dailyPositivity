import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import categoryList from '../categoryList';

class Category extends Component{
   render(){
      const categories = categoryList;
      return(
         <div>
            <h1>Pick Category</h1>
            {  categories.map((category,index) => {
                  return (
                     <Link to = {`/category/:${category}`}>
                        <div key = {index}>
                           <h1>{category.name}</h1>
                        </div>
                     </Link>
                  )
               })
            }
         </div>
      )//End of return
   }//End of render()
}

export default Category;