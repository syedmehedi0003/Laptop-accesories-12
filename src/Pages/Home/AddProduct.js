import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
            })

    };

    return (

        <div className='flex justify-center items-center'>

            <div class="card w-96 bg-base-100 shadow-xl border ">
                <div class="card-body text-center">
                    <h2 class="text-2xl font-bold ">Add Product</h2><hr />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="label">
                            <span class="label-text-alt">Product Name</span>
                        </label>
                        <input type="text" placeholder="Product Name" {...register("name")} class="input input-bordered w-full max-w-xs mb-2" />


                        <label class="label">
                            <span class="label-text-alt">Price</span>
                        </label>
                        <input type="text" placeholder="Price" {...register("price")} class="input input-bordered w-full max-w-xs mb-2" />

                        <label class="label">
                            <span class="label-text-alt">Description</span>
                        </label>
                        <textarea type="text" placeholder="Description"
                            {...register("description")} class="input input-bordered w-full max-w-xs mb-2" />


                        <label class="label">
                            <span class="label-text-alt">Quantity</span>
                        </label>
                        <input type="text" placeholder="Quantity"
                            {...register("available")} class="input input-bordered w-full max-w-xs mb-2" />


                        <label class="label">
                            <span class="label-text-alt">Brand</span>
                        </label>
                        <input type="text" placeholder="Brand" {...register("supplier")} class="input input-bordered w-full max-w-xs mb-2" />

                        <label class="label">
                            <span class="label-text-alt">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" {...register("img")} class="input input-bordered w-full max-w-xs mb-2" />


                        {/* <button class="btn btn-primary">Buy Now</button> */}
                        <input class="btn btn-primary" type="submit" value="Add Product" />

                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddProduct;



