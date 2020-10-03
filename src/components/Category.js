import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Category extends Component{
   render(){
      const catagory = ['nature','forest','somthin'];
      return(
         <div>
            <h1>Pick Category</h1>
            {  catagory.map(catagory => {
                  return (
                     <Link to = {`/category/:${catagory}`}>
                        <h1>{catagory}</h1>
                     </Link>
                  )
               })
            }
         </div>
      )//End of return
   }//End of render()
}

export default Category;