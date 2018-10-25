import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='parentn'>
            <div className='childn'>Logo</div>
            <div className='childn'>
            <div><Link className='links' to='/'>Home</Link></div>
            <div><Link className='links' to='/cool-couches'>Couches</Link></div>
            <div><Link className='links' to='/profile'>Profile</Link></div>

            </div>
        </div>
    );
};

export default NavBar;