import React from 'react';

const Footer = () => {
    return (



        <footer
            // style={
            //     {
            //         position: 'fixed',
            //         left: '0',
            //         bottom: '0',
            //         width: '100%',
            //         marginTop: '1000px',

            //     }
            // }
            className=" p-5 bg-base-200 mt-10">
            <div className="footer p-5 flex flex-col md:flex-row justify-around items-center">
                <div>
                    <span className="footer-title text-lg">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-lg">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-lg">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>



            <div className="divider"></div>

            <div className='text-center my-5'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>




    );
};

export default Footer;