import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <div className = "wrapper">
                <div className = "headerContainer">
                    <Link to = "/">
                        <img className="logo" src={require("../Assets/misty-day.png")}/>
                        {/* OTHER IMAGES
                           https://www.flaticon.com/svg/static/icons/svg/1295/1295535.svg
                           https://www.flaticon.com/svg/static/icons/svg/3159/3159094.svg
                           https://www.flaticon.com/svg/static/icons/svg/2714/2714077.svg */}
                    </Link>
                </div>
            </div>
    )
   }
}

export default Header;