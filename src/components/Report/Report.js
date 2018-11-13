import React from 'react';
import './Report.scss';

const Report = (props) => {
    return (
        <div className='Report'>
            {props.children}
        </div>
    );
}

export default Report;
