import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
            <h2>My Review: {review.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Ratting</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            review.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.ratting}</td>
                                <td>{a.commect}</td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;