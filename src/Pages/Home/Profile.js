import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';


const Profile = () => {


    const [user] = useAuthState(auth);

    if (user) {
        console.log(user);
    }




    const handleUpdate = event => {

        event.preventDefault();



        const userData = {

            userName: user.displayName,
            email: user.email,
            education: event.target.education.value,
            address: event.target.address.value,
            linkedin: event.target.linkedin.value,

        }

        const url = `https://morning-garden-88599.herokuapp.com/user/profile`;
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
                        <p className='text-2xl fond-bold mb-4'>Update User Profile</p>
                        <form className='d-flex flex-column' onSubmit={handleUpdate}>

                            <input type="text" disabled className='mb-2 input input-bordered w-full max-w-xs' placeholder='name' name="name" value={user?.displayName} />

                            <input type="text" disabled className='mb-2 input input-bordered w-full max-w-xs' placeholder='email' name="email" value={user?.email} />

                            <input type="text" className='mb-2 input input-bordered w-full max-w-xs' placeholder='Education' name="education" />

                            <textarea type="text" className='mb-2 input input-bordered w-full max-w-xs' placeholder='Address' name="address" />

                            <input type="text" className='mb-2 input input-bordered w-full max-w-xs' placeholder='linkedin' name="linkedin" />

                            <input className='mb-2 btn btn-primary' type="submit" value="Update User" />
                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;





