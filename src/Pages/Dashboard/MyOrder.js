import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://secure-journey-62088.herokuapp.com/order?email=${user.email}`,
                {

                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            )
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrder(data);
                });


            //     .then(res => res.json())
            //  .then(data => {
            // setOrder(data);
            // })


        }
    }, [user])

    return (
        <div>
            <h2>My Order: {order.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            order?.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.userName}</td>
                                <td>{a.email}</td>
                                <td>{a.product}</td>
                                <td>{a.price}</td>
                                <td>{a.brand}</td>
                                <td>{a.quantity}</td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;