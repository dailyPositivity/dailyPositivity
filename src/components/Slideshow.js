import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import categoryList from '../categoryList';
import InputQuote from './InputQuote';
import StartSlideshowButton from './StartSlideshowButton';

class Slideshow extends Component{
   getCategoryImagePath(){  
      const filteredCategory = categoryList.filter((category) => {
            return(category.name === this.props.match.params.categoryName);
         })
      return filteredCategory[0];
   }

   render(){
      //filter categoryList array as per passed in category by Category Component
      const {name,path,description} = {...this.getCategoryImagePath()};

      return(
               <div className = "slideshowContainer">
                     <button className = "slideshowBtnLeft">
                        <i className="fa fa-chevron-left"></i>
                     </button>
                   <div className = "slideImg">
                     <img src = {this.props.images[0].url} alt = {description}/>
                     <h3>{name}</h3>
                   </div>
                     <button className = "slideshowBtnRight">
                        <i className="fa fa-chevron-right"></i>
                     </button>
               </div>
      )
   }
}

export default withRouter(Slideshow);