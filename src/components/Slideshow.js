import React, { Component } from 'react';

class Slideshow extends Component{
   constructor(props){
      super(props);
      this.state = {
         currentSlide:0,
      }
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

   componentDidMount(){
      setInterval(this.autoPlay,3000);
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
                     : <h2 className="endingMessage">Thank you for watching</h2>  
                     )             
                  : <h2 className="endingMessage">Category not selected.Select the category first.</h2>  
               }      
            </div>
            <button className = "slideshowBtnRight" disabled={this.state.currentSlide === this.props.images.length}>
               <i className="fa fa-chevron-right" onClick ={this.prevNextHandler} name="next"></i>
               {/* &raquo; */}
            </button>
         </div>      
      )
   }
}

export default Slideshow;