import React, { useState } from 'react';
import Message from '../components/tip';
import Title from '../components/title';
import Subjects from '../components/subjects';
import '../styles/main-content.css';
import Subject from '../components/subject';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Exams from '../components/exams';

const MainConent = () => {
    return (
        <Router>
            <div className='main-content'>
            {/* <Message>Welcome to Exam center, Arb. To attend an exam just pick a subject from the list below.</Message> */}
                <Switch>
                    <Route path='/'>
                        <Subjects />
                    </Route>
                    <Route path='/subjects'>
                        <Subjects />
                    </Route>
                    <Route path='/exams'>
                        <Exams />
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default MainConent;