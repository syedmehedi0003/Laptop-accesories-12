import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserReview from '../../Pages/Home/UserReview';

const Review = () => {
    const [review, setReview] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            // fetch(`http://localhost:5000/review?email=${user.email}`)
            fetch(`http://localhost:5000/review?email=${user.email}`)

                .then(res => res.json())
                .then(data => setReview(data));
        }
    }, [user])

    return (
        <div>

            <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                Customer Review</h1>
            <h2 className='text-center font-bold mb-3'>Total Review: {review.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center mb-10'>


                {

                    review.map((review) => <UserReview
                        key={review._id}
                        review={review}

                    ></UserReview>)
                }

            </div>
        </div >


    );
};

export default Review;