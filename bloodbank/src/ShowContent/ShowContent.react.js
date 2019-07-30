import React from 'react';

import './ShowContent.css';

const ShowContent = (props) => {

    return (
        <div className='showcontent_wrapper'>
            <h4>{props.request.location}</h4>
            <span><img src={props.request.imageRef} alt="abpos"></img></span>
            <h4>{props.request.bloodGroup}</h4>
            <h4>{props.request.requiredUnits}</h4>
        </div>
    );

}

export default ShowContent;