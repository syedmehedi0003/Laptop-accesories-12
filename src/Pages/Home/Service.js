import React from 'react';
import './service.css';

const Service = ({ service }) => {
    const { name, price, description, available, order, img, supplier } = service;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl border justify-items-center">
            <figure className="px-10 pt-10">
                <img className='w-3/5' src={img} alt="" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <h3> <span className='font-bold'>Price:</span> {price}</h3>
                <h3><span className='font-bold'>Description:</span>  {description}</h3>
                <h3><span className='font-bold'>Available Quantity:</span>  {available}</h3>
                <h3><span className='font-bold'>Minimum Order:</span> {order}</h3>
                <h3> <span className='font-bold'>Brand:</span> {supplier}</h3>

                <div className="card-actions justify-end">
                    <button className="btn btn-secondary uppercase text-white font-bold buy-now">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;