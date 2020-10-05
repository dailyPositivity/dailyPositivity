import React from 'react';

const Footer = () => {

    const year  =  new Date().getFullYear();
    return(
            <div className = "wrapper">
                <p>Copyright ⓒ {year}</p>
            </div>
    );
}

export default Footer;