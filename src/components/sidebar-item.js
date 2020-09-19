import React, { useState } from 'react';
import '../styles/sidebar.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const SidebarItem = ({ name, icon, handleItemClick, active, route }) => {
    return (
        <Router>
            <div onClick={handleItemClick} className={active ? 'sidebar-item active' : 'sidebar-item'}>
                <div className='item-icon'>
                    <ion-icon name={icon}></ion-icon>
                </div>
                <div className='sidebar-text'>
                    <Link className='sidebar-item-links' to={route}> { name }  </Link>
                </div>
            </div>
        </Router>
    )
}

export default SidebarItem;