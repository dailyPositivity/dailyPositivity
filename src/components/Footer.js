import React from 'react';

const Footer = () => {
    const year  =  new Date().getFullYear();
    return (
        <div className = "footer wrapper">
            <p>Copyright ⓒ {year} - Created at <a href="https://junocollege.com/">Juno College</a></p>
        </div>
    );
}

export default Footer;