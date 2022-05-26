
// import React from 'react';
// import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Order = () => {
    const { serviceId } = useParams();


    return (
        <div className='w-50 mx-auto text-center'>
            {/* <h4 className='mb-2'>Add Product</h4> */}
            <h2>Welcome to detail:{serviceId}</h2>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed CheckOut</button>
                </Link>
            </div>

        </div>
    );
};

export default Order;




