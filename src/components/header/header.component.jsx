import React from 'react';
import './header.styles.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-company'>
                <div className='company-name'> Some Company </div>
            </div>
            <div  className='header-anchors'>
                <div className='nav-button'> Gallery  </div>
                <div className='nav-button'> Products </div>
                <div className='nav-button'> Contact Us  </div>
            </div>

        </div>
    )
}

export default Header;