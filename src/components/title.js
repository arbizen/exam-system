import React from 'react';

const Title = ({children}) => {
    return (
        <div className='content-title'>
            <h4> { children } </h4>
            <ion-icon name="arrow-forward"></ion-icon>
        </div>
    )
}

export default Title;