import React from 'react';
import mypic from '../../images/mypic.jpg';

const Portfolio = () => {
    return (
        <div className='flex justify-center items-center' >
            <div className='w-1/4'>
                <img src={mypic} alt="" />
            </div>

        </div>
    );
};

export default Portfolio;