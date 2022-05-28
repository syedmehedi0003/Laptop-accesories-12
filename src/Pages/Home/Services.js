import React, { useEffect, useState } from 'react';
import useServices from '../hooks/useServices';
import Order from './Order';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useServices();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div>
            <h1 className="text-2xl font-bold text-center mb-8 text-secondary"> Laptop Accessories</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center mb-10'>


                {

                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setOrder={setOrder}
                    ></Service>)
                }

            </div>
            {order && <Order order={order}></Order>}
        </div>
    );
};

export default Services;
