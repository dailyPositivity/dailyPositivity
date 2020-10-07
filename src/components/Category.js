import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import categoryList from '../categoryList';
import Load from './saveSlideshow/LoadSlideshow.js';


class Category extends Component{
   render(){
      const categories = categoryList;
      return(

         <div className = "category wrapper">
           
            <div className = "categoryContainer">
               {  categories.map((category,index) => {
                     return (
                        <Link to = {`/category/${category.name}`} key={index}>
                           <div className="categoryItem">
                              <div className = "categoryImg">
                                 <img src={category.path} alt = {category.description}/>
                              </div>
                              <h4>{category.name}</h4>
                           </div>
                        </Link>
                     )
                  })
               }
            </div>
            <h3>Choose your vibe...</h3>
            <Load/>
         </div>
      )//End of return
   }//End of render()
}

export default Category;