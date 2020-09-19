import React from 'react';
import '../styles/subject.css';
import BanglaCover from '../assets/bangla.jpeg';

const Subject = ({name, date, time, startAt, examType, des}) => {
    return (
        <div className='subject'>
            <div className='subject-image-holder'>
                <img src={BanglaCover} className='subject-image' />
            </div>
            <div className='subject-meta'>
                <p className='subject-title'> { name } </p>
                <p className='grey'>on { date }</p>
                <div className='exam-info two'>
                    <p className='grey'>
                        <ion-icon name="alarm-outline"></ion-icon>
                        { time }
                    </p>
                    <p className='grey'>
                        <ion-icon name="timer-outline"></ion-icon>
                        { startAt }
                    </p>
                </div>
                <div className='exam-info'>
                    <p className='semister'><b> { examType } </b></p>
                    <p className='about-exam'> { des } </p>
                </div>
                <div className='subject-buttons'>
                    <button className='subject-button'>Sit</button>
                </div>
                {/* <div className='exam-info'>
                    <p className='type'>
                        <ion-icon name="alarm-outline"></ion-icon>
                        50 mins
                    </p>
                    <p className='type'>
                        <ion-icon name="timer-outline"></ion-icon>
                        at 11 AM
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Subject;