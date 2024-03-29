import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    const url = `https://laptop-accesories1.onrender.com/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to made an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
        }
      });
  };

  return (
    <tr>
      <td>{email}</td>

      {role !== "admin" ? (
        <td>
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        </td>
      ) : (
        <td>
          <button class="btn btn-xs">Already Admin</button>
        </td>
      )}
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
