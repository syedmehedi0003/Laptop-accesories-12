import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])

    return (
        <div>
            <h2>My Order: {order.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
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
                        {/* <!-- row 1 --> */}
                        {
                            order.map((a, index) => <tr>
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