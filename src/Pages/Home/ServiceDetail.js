import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>Welcome to detail:{serviceId}</h2>
            <h3>You are about to book: {service.name}</h3>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;