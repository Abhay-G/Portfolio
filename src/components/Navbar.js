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
                    <a href='/' className='in-nav-link nav-items'>
                        Projects
                    </a>
                    <a href='/' className='in-nav-link nav-items'>
                        About
                    </a>
                    <a href='/' className='in-nav-link nav-items'>
                        Resume
                    </a>
                </ul>
            </div>
            <div className='right'>
                {' '}
                <a href='/' className='in-nav-link nav-items'>
                    Contact Me.
                </a>
            </div>
        </div>
    );
};

export default Navbar;
