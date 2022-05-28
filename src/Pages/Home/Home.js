import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Services from './Services';
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import img1 from '../../images/Business/img1.jpg';
import img2 from '../../images/Business/img2.jpg';
import img3 from '../../images/Business/img3.jpg';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            {/* //for business summery */}
            <div>
                <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl font-semibold'>We are trusted</h1>
                <h1 className='text-uppercase text-center text-primary text-2xl custom-border w-fit mx-auto mt-2 pb-4'>We understand our users expectation</h1>
                <div className="business-summery mt-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                    <BusinessSummery
                        icon={<BiWorld></BiWorld>}
                        end={50}
                        title="Countries"
                        image={img2}
                    />
                    <BusinessSummery
                        icon={<BsPeopleFill></BsPeopleFill>}
                        end={900}
                        title="Happy Clients"
                        image={img1}
                    />
                    <BusinessSummery
                        icon={<MdOutlineComputer></MdOutlineComputer>}
                        end={1200}
                        title="Successful Projects"
                        image={img3}
                    />
                </div>
            </div>

            <Review></Review>


        </div>
    );
};

export default Home;