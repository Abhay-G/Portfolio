import React from 'react';
import logo from '../assets/logo.svg';
const Navbar = () => {
    return (
        
            <div className='nav'>
                <div className='left'>
                    <img src={logo} alt='AG logo' />
                </div>
                <div className='middle'>
                   <ul>
                    <a href="#" className='nav-items'>Projects</a>
                    <a href="#" className='nav-items'>About</a>
                    <a href="#" className='nav-items'>Resume</a>
                    </ul>
                </div>
                <div className='right'> <a href="#" className='nav-items'>Contact Me.</a></div>
            </div>
        
    );
};

export default Navbar;
