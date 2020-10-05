import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <div className = "wrapper">
                <div className = "headerContainer">
                    <Link to = "/">
                        <img src="https://via.placeholder.com/100x100" alt=""/>
                    </Link>
                </div>
            </div>
    )
   }
}

export default Header;