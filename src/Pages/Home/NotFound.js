import React from 'react';
import Error from '../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center py-0 my-0'>
            <img src={Error} alt="" />
        </div>
    );
};

export default NotFound;