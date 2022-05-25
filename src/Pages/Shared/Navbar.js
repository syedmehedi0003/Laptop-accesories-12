import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/order">Order Now</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 justify-between mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-orange-400">BD SHOP</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end pr-0">
                <ul>
                    <li>
                        {user ? <button onClick={logout} className="btn btn-ghost text-red-500 font-bold">Sign Out</button> :
                            <Link to="/login" className="text-primary font-bold btn btn-ghost ">Login</Link>

                        }
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;

