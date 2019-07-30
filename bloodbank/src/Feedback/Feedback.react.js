import React from 'react';



const Feedback = (props) => {

    return (
        <div >
            <button className='fa fa-thumbs-up' onClick={props.actionUp}></button>
            <button className='fa fa-thumbs-down' onClick={props.actionDown}></button>
        </div>
    );

}

export default Feedback;