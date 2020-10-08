import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className={this.props.class}>
                    <Link to="/" onClick={this.props.revert}>
                        <img className="logo" src={require("../Assets/misty-day.png")} alt="Outline of a red sun rising above 3 horizonal red lines." />
                    </Link>
                </div>
            </div>
        )
   }
}

export default Header;
