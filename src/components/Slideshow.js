
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Save from './saveSlideshow/slideStorage.js';

class Slideshow extends Component{
   constructor(props){
      super(props);
      this.state = {
         currentSlide:0,
      }
   }

   componentDidMount() {
      // retrieve images from Unsplash API
      const category = this.props.match.params.categoryName;
      this.props.getImages(category);
      this.props.getQuotes();

      setInterval(this.autoPlay,100);
   }

   prevNextHandler = (event) => {
      console.log(event.target.name);
      if(event.target.name === "previous"){
         if(this.state.currentSlide > 0){
            this.setState({
               currentSlide:this.state.currentSlide - 1,
            })
         } 
      }else if(event.target.name === "next"){
         if(this.state.currentSlide < this.props.images.length){
            const currentState = this.state.currentSlide;
            this.setState({
               currentSlide:currentState + 1,
            })
         }
      }
   }

   autoPlay = () => {
      if(this.state.currentSlide < this.props.images.length){
         const currentState = this.state.currentSlide;
         const currentQuote = this.state.currentQuote;
         this.setState({
            currentSlide:currentState + 1,
            currentQuote:currentQuote + 1,
         })
      }
   }

   render(){
      return(
         <div className = "slideshowContainer">
            <button className = "slideshowBtnLeft" disabled={this.state.currentSlide  === 0}>
               <i className="fa fa-chevron-left" onClick ={this.prevNextHandler} name ="previous"></i>
               {/* &laquo; */}
            </button>
            <div className = "slideImg">
               {this.props.images.length > 1 ? 
                  (  this.state.currentSlide < this.props.images.length ?
                     <div className="imageContainer"> 
                        <img src={this.props.images[this.state.currentSlide].url} 
                        alt={this.props.images[this.state.currentSlide].alt}/>
                        <div className="quoteContainer">
                           <p>{this.props.quotes[this.state.currentSlide]}</p>  
                        </div> 
                     </div>     
            // ending component  
                     : <div>
                           <Save images={this.props.images} quotes={this.props.quotes}/>
                        </div>
                     )             
                  : <h2 className="endingMessage">Category not selected.Select the category first.</h2> 
               }      
            </div>
            <button className = "slideshowBtnRight" disabled={this.state.currentSlide === this.props.images.length}>
               <i className="fa fa-chevron-right" onClick ={this.prevNextHandler} name="next"></i>
               {/* &raquo; */}
            </button>
            <div className="slideSpeed">
               <button className="pause">||</button>
               <button className="play">Play</button>
               <button className="speedInterval">x2</button>
               <button className="speedInterval">x3</button>
               <button className="speedInterval">x5</button>
               <button onClick={() => this.handleClick()}       className="stopSlide">End</button>
               
            </div>
         </div>      
      )
   }
}

export default withRouter(Slideshow);