import React, { useEffect } from 'react';
import useServices from '../hooks/useServices';

const ManageProduct = () => {

    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are u sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;

            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='w-1/2 mx-auto '>

            <p className='text-2xl font-bold'>Manage Product</p>
            {
                services.map(service => <div key={service._id}>
                    <div className='text-center'>
                        <h3 className=''>ID: {service._id}
                            &nbspc; Name: {service.name}</h3>
                        <button
                            className='btn btn-primary'
                            onClick={() => handleDelete(service._id)}
                        >X</button>
                    </div>
                    <br />
                </div>)
            }
        </div>

    );
};

export default ManageProduct;