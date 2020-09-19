import React from 'react';

const Header = () => {
    return (
        <div className='content-header'>
            <div className='search-holder'>
                <div className='search-icon'>
                    <ion-icon name='search'></ion-icon>
                </div>
                <div className='search-input'>
                    <input className='search' placeholder='Search for anything' />
                </div>
            </div>
            <div className='header-meta'>
                <div className='profile-picture'>
                    <ion-icon name="person-circle"></ion-icon>
                </div>
                <div className='logout-button'>
                    <button className='logout'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header;