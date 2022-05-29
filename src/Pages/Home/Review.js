import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserReview from '../../Pages/Home/UserReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            // fetch(`https://morning-garden-88599.herokuapp.com/review?email=${user.email}`)
            fetch(`https://morning-garden-88599.herokuapp.com/user/review`)

                .then(res => res.json())
                .then(data => setReviews(data));
        }
    }, [user])

    return (
        <div>

            <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                Customer Review</h1>
            <h2 className='text-center font-bold mb-3'>Total Review: {reviews.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center mb-10'>


                {

                    reviews.map((review) => <UserReview
                        key={review._id}
                        review={review}

                    ></UserReview>)
                }

            </div>
        </div >


    );
};

export default Review;

