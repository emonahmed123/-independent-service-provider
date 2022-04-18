import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    const today =new Date()
    const year =today.getFullYear()
    return (
        <footer className='text-center  Footer  bg-light ' >
            <p><small > Copyright @  {year} </small></p>
            <p><small>About us</small></p>
        
        </footer>
    );
};

export default Footer;