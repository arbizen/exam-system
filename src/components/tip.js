import React from 'react';

const Message = ({children}) => {
    return (
        <div className='message-holder'>
            {children}
        </div>
    )
}

export default Message;