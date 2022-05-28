import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth);

    if (user) {
        console.log(user);
    }




    const handleReview = event => {

        event.preventDefault();



        const userData = {

            userName: user.displayName,
            email: user.email,
            ratting: event.target.ratting.value,
            commect: event.target.commect.value,

        }

        const url = `https://secure-journey-62088.herokuapp.com/user/review`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)

        })
            .then(res => res.json())
            .then(result2 => {
                console.log(result2);
                alert('Update Successfully');
                event.target.reset();

            })

    };
    return (
        <div className='flex justify-center items-center'>




            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <div className='w-50 mx-auto'>
                        <p className='text-2xl fond-bold mb-4'>User Review</p>
                        <form className='d-flex flex-column' onSubmit={handleReview}>

                            <input type="text" disabled className='mb-2 input input-bordered w-full max-w-xs' placeholder='name' name="name" value={user?.displayName} />

                            <input type="text" disabled className='mb-2 input input-bordered w-full max-w-xs' placeholder='email' name="email" value={user?.email} />

                            <input type="text" className='mb-2 input input-bordered w-full max-w-xs' placeholder='Ratting(Out of Five)' name="ratting" />

                            <input type="text" className='mb-2 input input-bordered w-full max-w-xs' placeholder='Description' name="commect" />



                            <input className='mb-2 btn btn-primary' type="submit" value="User Review" />
                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddReview;