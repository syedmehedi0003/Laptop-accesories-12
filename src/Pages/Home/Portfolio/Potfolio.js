import React from 'react';
// import Myimg from '../../../images/portfolio/mypic4.jpg';
import Myimg2 from '../../../images/portfolio/pic7.jpg';
import Marvel from '../../../images/portfolio/marbel.PNG';
import strict from '../../../images/portfolio/strict.PNG';
import tinyone from '../../../images/portfolio/tinyone.PNG';



const Potfolio = () => {
    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Myimg2} className="lg:w-1/3 rounded-lg imgBorder sm:w-1/2" />
                    <div className='text-center lg:text-left'>
                        <h1 className="text-5xl font-bold text-primary">Hi,   I am Syed Mahade Hasan</h1>
                        <p className="py-5">
                            I have completed my B.sc in CSE degree from the Department of Computer Science and Engineering of The Millennium University.

                            My keen interest in Computer Science and Engineering has enabled me to develop a good knowledge of Programming language and IT. </p>
                        <p className='text-lg mb-2'>I good at Html, Css, Bootstrap, Tailwind, JavaScript, React, NodeJs and MongoBD.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>



            <div className='text-center'>
                <h2 className='text-2xl font-bold mb-5'>EDUCATION</h2>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center mb-10'>

                    <div class="card w-96 bg-base-100 shadow-xl border">
                        <div class="card-body ">

                            <p className='text-xl font-bold'>B.Sc in Computer Science and Engineering (CSE)</p>
                            <p> Passing Year 2020 <br />
                                The Millennium University <br />
                                Momenbag, Dhaka </p>
                        </div>
                    </div>


                    <div class="card w-96 bg-base-100 shadow-xl border">
                        <div class="card-body ">

                            <p className='text-xl font-bold'>H.S.C (Science)</p>
                            <p>
                                Passing Year 2014 <br />
                                Kazi Noman Ahmed Degree Collage <br />
                                Muradnagar, Cumillla  </p>
                        </div>
                    </div>

                    <div class="card w-96 bg-base-100 shadow-xl border">
                        <div class="card-body ">

                            <p className='text-xl font-bold'> S.S.C (Science)</p>
                            <p>
                                Passing Year 2012 <br />
                                Darora D.C High School <br />
                                Muradnagar, Cumillla </p>

                        </div>
                    </div>

                </div>
            </div>






            <div className='text-center'>
                <h2 className='text-2xl font-bold mb-5'>MY WORK</h2>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center mb-10'>

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure className="h-1/2">
                            <img src={Marvel} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">

                            <p className='font-bold text-xl'> MARBEL </p>

                            <p>
                                PSD to HTML
                                We are a digital and branding agency based in London</p>

                            <button class="btn btn-primary" to="https://syedmehedi0003.github.io/Marbel/" >Buy Now</button>
                        </div>
                    </div>



                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure className="h-1/2">
                            <img src={strict} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">

                            <p className='font-bold text-xl uppercase'> strict </p>

                            <p>
                                PSD to HTML
                                We are a digital and branding agency based in London</p>

                            <button class="btn btn-primary" to="https://syedmehedi0003.github.io/Marbel/" >Buy Now</button>


                        </div>
                    </div>



                    <div class="card w-96 bg-base-100 shadow-xl"  >

                        <figure className="h-1/2">
                            <img src={tinyone} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">

                            <p className='font-bold text-xl uppercase'> tinyone </p>

                            <p>
                                PSD to HTML
                                We are a digital and branding agency based in London</p>

                            <button class="btn btn-primary" to="https://syedmehedi0003.github.io/Marbel/" >Buy Now</button>
                        </div>

                    </div>


                </div>

            </div>



        </div>


    );
};
export default Potfolio;