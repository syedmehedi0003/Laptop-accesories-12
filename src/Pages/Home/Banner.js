import React from 'react';
import bgimg from '../../images/apple1.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bgimg} className="lg:w-1/2 rounded-lg " />
                <div className='text-center lg:text-left'>
                    <h1 className="text-5xl font-bold text-secondary"> Laptop Accessories</h1>
                    <p className="py-6">
                        Discover a wide range of Laptop accessories including Battery, Display, Keyboard at best price in Bangladesh.<br />Find Computer and laptop Accessories Online. </p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;