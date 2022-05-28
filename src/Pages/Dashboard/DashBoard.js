import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center h-full">
                <p className='text-primary text-3xl font-bold mb-5'>Welcome to DashBoard</p>
                {user && <p></p>}
                <Outlet ></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">

                    <li> <Link className='mb-2' to="/dashboard">DashBoard</Link> </li>

                    {(user && !admin) && <li> <Link className='mb-2' to="/dashboard/uorder">My Order</Link> </li>}
                    {(user && !admin) && <li><Link className='mb-2' to="/dashboard/userprofile">Update Profile</Link></li>}
                    {(user && !admin) && <li><Link className='mb-2' to="/dashboard/addreview">Add Review</Link></li>}

                    {admin && <li> <Link className='mb-2' to="/dashboard/users">All Users</Link> </li>}
                    {admin && <li><Link className='mb-2' to="/dashboard/manage">Manage Product</Link></li>}
                    {admin && <li><Link className='mb-2' to="/dashboard/add">Add Product</Link></li>}
                    {admin && <li><Link className='mb-2' to="/dashboard/allOrder">All Orders</Link></li>}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;