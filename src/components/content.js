import React from "react";
import '../styles/content.css';

// components 
import Clock from '../components/clock';
import Header from '../components/content-head';
import MainContent from '../components/main-content';
import MainConent from "../components/main-content";


const Content = () => {
    return (
        <div className='content-area'>
            <Header />
            <MainConent />
        </div>
    );
}

export default Content;