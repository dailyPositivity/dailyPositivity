import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <div className = "wrapper">
                <div className = "headerContainer">
                    <Link to = "/">
                        <img className="logo" alt="Sun rising with water below" src={require("../Assets/misty-day.png")}/>
                    </Link>
                </div>
            </div>
    )
   }
}

export default Header;