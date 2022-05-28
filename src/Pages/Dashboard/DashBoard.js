import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center h-full">
                <p className='text-primary text-3xl font-bold'>Welcome to DashBoard</p>
                <Outlet ></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">

                    <li> <Link className='mb-2' to="/dashboard">DashBoard</Link> </li>
                    <li> <Link className='mb-2' to="/dashboard/review">Review</Link> </li>
                    <li> <Link className='mb-2' to="/dashboard/uorder">User Order</Link> </li>
                    <li> <Link className='mb-2' to="/dashboard/users">All Users</Link> </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;