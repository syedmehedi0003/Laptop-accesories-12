import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import { Link } from 'react-router-dom';
import './service.css';

const Service = ({ service }) => {
    const { _id, name, price, description, available, order, img, supplier } = service;
    // _id,

    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);

    }

    const [user] = useAuthState(auth);

    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl border justify-items-center">
            <figure className="px-10 pt-10">
                <img className='w-3/5' src={img} alt="" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <h3> <span className='font-bold'>Price:</span> {price}</h3>
                <h3><span className='font-bold'>Description:</span>  {description}</h3>
                {/* <h3><span className='font-bold'>Available Quantity:</span> 
                 {available}</h3> */}

                <h3>{
                    available.length < 1

                        ? <span className='text-red-500'>Stock Out</span>
                        : <span className='font-bold'>Available Quantity:{available}</span>
                }</h3>


                <h3><span className='font-bold'>Minimum Order 100 Pc</span> {order}</h3>
                <h3> <span className='font-bold'>Brand:</span> {supplier}</h3>

                <div className="card-actions justify-end">
                    <button onClick={() => navigateToProductDetail(_id)} disabled={available.length < 1} className='btn btn-primary buy-now'>Buy Now</button>





                    {/* <Link disabled={available.length < 1} className='btn btn-secondary uppercase text-white font-bold buy-now'
                        to="" onClick={() => navigateToProductDetail(_id)}
                    >Buy Now</Link> */}

                    {/* <button className='btn btn-primary'
                        onClick={() => setOrder(service)}
                    >Buy Now</button> */}

                </div>
            </div>
        </div>
    );
};

export default Service;



