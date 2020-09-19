import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router';
import '../styles/sidebar.css';
import SidebarItem from '../components/sidebar-item';
import Subjects from '../components/subjects';

const sidebarItems = [
    {
        name: 'Subjects',
        icon: 'apps',
        route: '/subjects'
    },
    {
        name: 'Exams',
        icon: 'create',
        route: '/exams'
    },
    {
        name: 'Favourite',
        icon: 'bookmark',
        route: '/favourite'
    }
];

const Sidebar = () => {

    const [itemIndex, setItemIndex] = useState(0); 

    return (
        <div className='sidebar'>
            <h3 className='sidebar-title'>Exam Center</h3>
            <div className='sidebar-item-holder'>
                {sidebarItems.map((item, i) => 
                <SidebarItem 
                active={itemIndex == i ? true : false} 
                handleItemClick={() => setItemIndex(i)} 
                key={i} 
                icon={item.icon} 
                name={item.name}
                route={item.route} />)}
            </div>
        </div>
    );
}

export default Sidebar;