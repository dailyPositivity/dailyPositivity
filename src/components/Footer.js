import React from 'react';

const Footer = () => {

    const year  =  new Date().getFullYear();
    return(
        <footer>
            <div>
                <p>Copyright @ {year} <span><a href= "https://junocollege.com">Created at Juno</a></span></p>
            </div>
        </footer>
    );
}

export default Footer;