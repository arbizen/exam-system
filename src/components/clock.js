import React, { useEffect, useState } from 'react';
import '../styles/clock-style.css';

const Clock = () => {

    let date = new Date();

    const [hour, setHour] = useState(date.getHours());
    const [minute, setMinute] = useState(date.getMinutes());
    const [second, setSecond] = useState(date.getSeconds());

    useEffect(() => {
        setInterval(() => {

            date = new Date();

            setHour(date.getHours());

            setMinute(date.getMinutes());

            setSecond(date.getSeconds());

        }, 1000);
    })

    return (
        <div className='clock-holder'>
            <div className='clock-block'> { hour == 0 ? 12 : hour > 12 ? hour - 12 : hour < 10 ? '0' + hour : hour } </div>
            <div className='clock-block'> { minute < 10 ? '0' + minute : minute }  </div>
            <div className='clock-block'> { second < 10 ? '0' + second : second }  </div>
            <div className='clock-block'> { hour == 0 ? 'AM' : hour > 12 ? 'PM' : hour < 12 ? 'AM' : '' } </div>
        </div>
    );
}

export default Clock;