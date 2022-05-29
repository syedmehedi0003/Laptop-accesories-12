import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { appendErrors, useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ServiceDetail = () => {


    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://morning-garden-88599.herokuapp.com/product/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);





    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log('data', data);

        const orderData = {
            productId: service._id,
            product: service.name,
            brand: service.supplier,
            price: service.price,
            userName: user.displayName,
            email: user.email,
            address: data.address,
            quantity: data.quantity,


        }

        const url = `https://morning-garden-88599.herokuapp.com/order`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)

        })
            .then(res => res.json())
            .then(result2 => {
                console.log(result2);
                reset();
            })

    };

    const [user] = useAuthState(auth);

    const minquantity = 100;


    return (
        <div>


            <h3 className='text-2xl text-center'>{service.name}</h3>



            <div className='flex justify-center items-center'>

                <div class="card w-96 bg-base-100 shadow-xl border ">
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold ">Buy This Product</h2><hr />

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label class="label">
                                <span class="label-text-alt">ID</span>
                            </label>
                            <input type="text" disabled placeholder="Product Name"
                                {...register("_id")}
                                value={service._id}
                                class="input input-bordered w-full max-w-xs mb-2 font-bold" />

                            <label class="label">
                                <span class="label-text-alt">Product Name</span>
                            </label>
                            <input type="text" disabled placeholder="Product Name"
                                {...register("name")}
                                value={service.name}
                                class="input input-bordered w-full max-w-xs mb-2 font-bold" />

                            <label class="label">
                                <span class="label-text-alt">Brand</span>
                            </label>
                            <input type="text" disabled placeholder="Brand" {...register("supplier")}
                                value={service.supplier}
                                class="input input-bordered w-full max-w-xs mb-2 font-bold" />

                            <label class="label">
                                <span class="label-text-alt">Price</span>
                            </label>
                            <input type="text" disabled placeholder="Price" {...register("price")}
                                value={service.price}
                                class="input input-bordered w-full max-w-xs mb-2 font-bold" />

                            <label class="label">
                                <span class="label-text-alt">Name</span>
                            </label>
                            <input type="text" disabled placeholder="Description"
                                {...register("username")}
                                value={user?.displayName}
                                class="input input-bordered w-full max-w-xs mb-2 font-bold" />

                            <label class="label">
                                <span class="label-text-alt">Email</span>
                            </label>
                            <input type="text" disabled placeholder="Description"
                                {...register("email")}
                                value={user?.email}
                                class="input input-bordered w-full max-w-xs mb-2 font-bold" />

                            <label class="label">
                                <span class="label-text-alt">Address</span>
                            </label>
                            <textarea type="text" placeholder="Description"
                                {...register("address")}

                                class="input input-bordered w-full max-w-xs mb-2" />



                            <label class="label">
                                <span class="label-text-alt">Quantity</span>
                            </label>
                            <input type="text" placeholder="Description"
                                {...register("quantity",
                                    {
                                        required: true,

                                        min: minquantity,
                                        message: "You mast order 100+"
                                    },
                                    {
                                        max: service.available,
                                        message: "Your order is invalid"
                                    }

                                )}

                                class="input input-bordered w-full max-w-xs mb-2" />


                            {user && <input class="btn btn-primary" disabled={errors?.quantity}
                                error
                                type="submit" value="Add Order" />}

                            {!user && <p className='text-red-500 font-bold'><Link to="/login" className=" font-bold btn btn-ghost ">First Login Here</Link></p>}

                        </form>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default ServiceDetail;

