import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';

const ManageProduct = () => {




    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are u sure?');
        if (proceed) {
            const url = `https://morning-garden-88599.herokuapp.com/product/${id}`;

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
        <div className='lg:w-1/2 sm:w-4/5 mx-auto flex justify-center'>

            <div class="card card-body  bg-base-100 shadow-xl text-center border">
                <p className='text-2xl font-bold '>Manage Product</p> <hr />
                {/* <figure class="px-10 pt-10">
                    <img src="" alt="" />
                </figure> */}
                <div class="items-center text-center">{
                    services.map(service => <div key={service._id}>
                        <h2 class="card-title justify-center">{service.name}</h2>
                        <p>ID: {service._id}</p>
                        <div class="card-actions justify-center mb-4">
                            <button
                                className='btn btn-primary btn-sm'
                                onClick={() => handleDelete(service._id)}
                            >Remove</button>

                            <Link className='btn btn-sm btn-primary mx-2' to={`/update/${service._id}`}>Update </Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>

    );
};

export default ManageProduct;



