import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio2">Portfolio</Link></li>


        {
            (admin || user) && <li><Link to="/dashboard">DashBoard</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-100 justify-between lg:mb-10 sm:mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl text-orange-400" to="/">BD SHOP</Link>
                {/* <a ></a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end pr-0">



                <label for="dashboard-sidebar" class="btn btn-primary btn-xs drawer-button lg:hidden">Open</label>
                <ul>
                    <li>
                        {user ? <button onClick={logout} className="btn btn-ghost text-red-500 font-bold">Sign Out</button> :
                            <Link to="/login" className="text-primary font-bold btn btn-ghost ">Login</Link>

                        }
                    </li>
                </ul>

            </div>
        </div >
    );
};

export default Navbar;

