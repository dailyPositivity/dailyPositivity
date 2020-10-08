import React, { Component } from 'react';
import {Link } from 'react-router-dom';

// Components
import categoryList from '../categoryList';
import UserLoad from './saveSlideshow/UserLoad';


class Category extends Component{
   render(){
      const categories = categoryList;
      return(
         <div className = "category wrapper">
            <UserLoad/>
            <h3>Choose your vibe</h3>
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
         </div>
      )//End of return
   }//End of render()
}

export default Category;