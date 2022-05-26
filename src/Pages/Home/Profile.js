import React from 'react';
import { useForm } from "react-hook-form";


const Profile = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/profile`;
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
                    <h2 class="text-2xl font-bold ">User Profile</h2><hr />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="label">
                            <span class="label-text-alt">Name</span>
                        </label>
                        <input type="text" placeholder="Name" {...register("name")} class="input input-bordered w-full max-w-xs mb-2" />


                        <label class="label">
                            <span class="label-text-alt">Price</span>
                        </label>
                        <input type="text" placeholder="Price" {...register("email")} class="input input-bordered w-full max-w-xs mb-2" />

                        <label class="label">
                            <span class="label-text-alt">Description</span>
                        </label>
                        <textarea type="text" placeholder="Description"
                            {...register("address")} class="input input-bordered w-full max-w-xs mb-2" />


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

export default Profile;



// <form onSubmit={handleSubmit(onSubmit)}>
//     <input {...register("firstName")} />
//     <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//     </select>
//     <input type="submit" />
// </form>