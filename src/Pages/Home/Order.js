
// import React from 'react';
// import { useForm } from "react-hook-form";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';


// const Order = () => {
//     const [user] = useAuthState(auth);
//     if (user) {
//         console.log(user);
//     }
//     const { register, handleSubmit, reset } = useForm();
//     const onSubmit = data => {
//         console.log(data);
//         const url = `http://localhost:5000/service`;

//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 console.log(result);
//                 reset();
//             })


//     };


//     return (
//         <div className='w-50 mx-auto text-center'>
//             <h4 className='mb-2'>Add Product</h4>
//             <h6>Name: {user.displayName}, Email: {user.email}</h6>
//             <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>

//                 <input className='mb-2' placeholder='Name' {...register("Product Name")} />
//                 <textarea className='mb-2' placeholder='Description' {...register("description")} />
//                 <input className='mb-2' placeholder='Price' {...register("amount")} />
//                 <input className='mb-2' placeholder='Quantity' {...register("quantity")} />
//                 <input className='mb-2' placeholder='Brand' {...register("supplier")} />
//                 <input className='mb-2' placeholder='Photo URL' {...register("img")} />

//                 <input className='mb-2 btn btn-primary' type="submit" value="Add Item" />
//             </form>


//         </div>
//     );
// };

// export default Order;




