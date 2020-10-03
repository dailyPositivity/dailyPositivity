import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <div className = "wrapper">
                <div className = "headerHoverContainer">
                        <div className="headerHiddenContainer">
                            <Link to = "/">
                            <img src="https://via.placeholder.com/350x65" alt=""/>
                            </Link>
                        </div>
                     
                </div>
            </div>
    )
   }
}

export default Header;