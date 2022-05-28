import React from 'react';
import mypic from '../../images/mypic.jpg';

const Portfolio = () => {
    return (

        <div className='flex justify-center items-center p-4'>
            <div class="card w-1/2 bg-base-100 shadow-xl  p-4" >
                <div className='w-1/4'>
                    <img src={mypic} alt="" />

                </div >
                <p className='text-2xl font-bold'> Hi, I am Syed Mahade Hasan
                    <br /> Web designer and developer</p>

                <p>
                    I have completed my B.sc in CSE degree from the Department of Computer Science and Engineering of The Millennium University.

                    My keen interest in Computer Science and Engineering has enabled me to develop a good knowledge of Programming language and IT.</p>


                <p className='text-2xl font-bold mt-4'>EDUCATION</p>
                <p className='text-xl font-bold mt-2'>B.Sc in Computer Science and Engineering (CSE)</p>
                <p>  Passing Year 2019<br />
                    The Millennium University<br />
                    Momenbag, Dhaka<br />
                </p>


                <p className='text-xl font-bold mt-2'>   H.S.C (Science)</p>
                <p>  Passing Year 2014 <br />
                    Kazi Noman Ahmed Degree Collage <br />
                    Muradnagar, Cumillla

                </p>

                <p className='text-xl font-bold mt-2'>  S.S.C (Science) </p>
                <p> Passing Year 2012 <br />
                    Darora D.C High School <br />
                    Muradnagar, Cumillla </p>

            </div >

        </div>

    );
};

export default Portfolio;

