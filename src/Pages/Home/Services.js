import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center mb-10'>

            {
                services.map(service => <Service
                    key={service._id}
                    service={service}

                ></Service>)
            }

        </div>
    );
};

export default Services;