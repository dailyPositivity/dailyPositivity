import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

let timerId = '';//stores setTimeout
let childTimerId = ''//stores setTimeout
let  activeClass =  [false,false,true,false,false];//to set active class for speed buttons on slideshow

class Slideshow extends Component{
   constructor(props){
      super(props);
      this.state = {
         currentSlide:0,
         currentSpeed:3000,
      }
   }

   componentDidMount() {
      // retrieve images from Unsplash API
      const category = this.props.match.params.categoryName;
      this.props.getImages(category);
      this.props.getQuotes();
      this.callSetTimeOut();
   }

   //logic to handle slideshow's previous and next arrows functionalty
   prevNextHandler = (event) => {
      //renove the active class if timer is not running and slide is not pause
      if(timerId == null && childTimerId === null && this.state.currentSpeed !== 0){
         activeClass =  [false,false,false,false,false];
      }
      //incement and decrement the currentSlide counter on previous and next button
      if(event.target.name === 'previous'){
         if(this.state.currentSlide > 0){
            this.setState({
               currentSlide:this.state.currentSlide - 1,
            })
         } 
      }else if(event.target.name === 'next'){
         if(this.state.currentSlide < this.props.images.length){
            const currentState = this.state.currentSlide;
            this.setState({
               currentSlide:currentState + 1,
            })
         }
      }
   }

   //modifiy the speed for slideshow based as per user's choice
   speedHandler = (event) => {
      if(event.target.value >= 0 && event.target.name !== 'end'){
         this.setState({
            currentSpeed:parseInt(event.target.value)
         }); 
         if(event.target.name === 'play'){ //restart the slideshow timer on click of play
            this.callSetTimeOut();
            if(this.state.currentSlide === this.props.images.length){ //if slideshow ended restart the slideshow on click of play button
               this.setState({
                  currentSlide:0
               })
            }              
        }     
      }else if(event.target.name === 'end'){//if slideshow ended stop the timer
         this.setState({
            currentSlide:this.props.images.length
         });
         clearTimeout(timerId);
         clearTimeout(childTimerId);
         timerId = null;
         childTimerId = null;
      }
   }

   //set active class to the spped button pressed by user, by default 3x is set as active
   setActiveClass =(event) => {
      if(event.target.value === '0')
         activeClass =  [true,false,false,false,false]      
      else if(event.target.value === '6000')
         activeClass = [false, true, false,false,false]
      else if(event.target.value === '3000')
         activeClass =  [false, false, true,false,false]
      else if(event.target.value === '1000')
         activeClass =  [false, false, false,true,false]
      else if(event.target.name === 'end')
         activeClass = [false, false, false,false,true]
   }
   
   //Called from render to disable the speed,play and pause buttons
   disableSpeedButton = (button) => {
      if(button === 'pause' || button === 'play')
         return (this.state.currentSlide === this.props.images.length);
      else
         return(this.state.currentSlide === this.props.images.length || activeClass[0] === true)
   }

   //Called from ComponentDidMount to start the slideshow 
   callSetTimeOut = () => {
         timerId  = setTimeout(()=>{
         childTimerId = setTimeout(this.callSetTimeOut, 0);
         if(this.state.currentSlide < this.props.images.length && this.state.currentSpeed > 0){
            const currentState = this.state.currentSlide;
            const currentQuote = this.state.currentQuote;
            this.setState({
               currentSlide:currentState + 1,
               currentQuote:currentQuote + 1,
            });
            //set active calss to end button on end of slideShow
            if(this.state.currentSlide+1 === this.props.images.length){
               activeClass = [false, false, false,false,true];
            }
         }
         else{
            clearTimeout(timerId);
            clearTimeout(childTimerId);
            timerId = null;
            childTimerId = null;
         }
      },this.state.currentSpeed);
   }

   render(){
      return(
         <div className = 'slideshowContainer'>
            <button className = 'slideshowBtnLeft' disabled={this.state.currentSlide  === 0} onClick ={this.prevNextHandler} name = 'previous'>
               &lsaquo;
            </button>
            <div className = 'slideImg'>
               {
                  this.state.currentSlide < this.props.images.length ?
                  <div className='imageContainer'> 
                     <img src={this.props.images[this.state.currentSlide].url} 
                     alt={this.props.images[this.state.currentSlide].alt}/>
                     <div className='quoteContainer'>
                        <p>{this.props.quotes[this.state.currentSlide]}</p>  
                     </div> 
                  </div>                  
                  : ( this.state.currentSlide > 0 && <h2 className='endingMessage'>Thank you for watching</h2>)                              
               }      
            </div>
            <button className = 'slideshowBtnRight' disabled={this.state.currentSlide === this.props.images.length} onClick ={this.prevNextHandler} name='next'>
               &rsaquo;
            </button>
            <div className="slideSpeed">
               <button className = {`slideSpeedBtn ${activeClass[0] ? 'slideSpeedActiveBtn' : ''}`}  onClick = {(event) => {this.setActiveClass(event);this.speedHandler(event);}}  value='0'     disabled={this.disableSpeedButton('pause')}>||</button>
               <button className = 'slideSpeedBtn' onClick = {(event) => {this.speedHandler(event);this.setActiveClass(event);}} value='3000' name = 'play'>Play</button>
               <button className = {`slideSpeedBtn ${activeClass[1] ? 'slideSpeedActiveBtn' : ''}`}  onClick = {(event) => {this.setActiveClass(event);this.speedHandler(event);}}  value='6000'  disabled={this.disableSpeedButton()}>x2</button>
               <button className = {`slideSpeedBtn ${activeClass[2] ? 'slideSpeedActiveBtn' : ''}`}  onClick = {(event) => {this.setActiveClass(event);this.speedHandler(event);}}  value='3000'  disabled={this.disableSpeedButton()}>x3</button>
               <button className = {`slideSpeedBtn ${activeClass[3] ? 'slideSpeedActiveBtn' : ''}`}  onClick = {(event) => {this.setActiveClass(event);this.speedHandler(event);}}  value='1000'  disabled={this.disableSpeedButton()}>x5</button>
               <button className = {`slideSpeedBtn ${activeClass[4] ? 'slideSpeedActiveBtn' : ''}`}  onClick = {(event) => {this.setActiveClass(event);this.speedHandler(event);}}  name = 'end'>End</button>              
            </div>
         </div>      
      )
   }
}

export default withRouter(Slideshow);