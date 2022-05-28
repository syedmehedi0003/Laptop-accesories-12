import React from 'react';

const UserReview = ({ review }) => {
    const { name, ratting, commect } = review;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border justify-items-center">


            <div className="card-body text-center font-bold">
                <p>Name: {name}</p>

                <p>Ratting(Out of Five): {ratting}</p>
                <p>Description: {commect}</p>
            </div>



        </div>

    );
};

export default UserReview;