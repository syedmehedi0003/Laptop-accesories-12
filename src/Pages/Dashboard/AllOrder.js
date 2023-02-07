import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AllOrder = ({ service }) => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const url = `https://laptop-accesories1.onrender.com/user/order`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }
  }, [user]);

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
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.userName}</td>
                <td>{a.email}</td>
                <td>{a.product}</td>
                <td>{a.price}</td>
                <td>{a.brand}</td>
                <td>{a.quantity}</td>
                <td>
                  {" "}
                  <button className="btn btn-primary btn-sm">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
