import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/toy-logo.png'
import { AuthContext } from '../../Provider/AuthProvider';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li>
                                <NavLink to="/"
                                    className={({ isActive }) => (isActive ? 'text-yellow-600 underline' : 'default')}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/alltoys"
                                    className={({ isActive }) => (isActive ? 'text-yellow-600 underline' : 'default')}>
                                    All Toys
                                </NavLink>
                            </li>
                            {
                                user &&
                                <li>
                                    <NavLink to="/mytoys"
                                        className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                        My Toys
                                    </NavLink>
                                </li>
                            }
                            {
                                user &&
                                <li>
                                    <NavLink to="/addtoys"
                                        className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                        Add Toys
                                    </NavLink>
                                </li>
                            }
                            {/* <li>
                                <NavLink to="/blog"
                                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                    Blogs
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                    <Link to="/" className='normal-case text-5xl custom-text font-bold'>
                        <img src={logo} className='w-32' alt="" srcset="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/alltoys"
                                className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                All Toys
                            </NavLink>
                        </li>
                        {
                            user &&
                            <li>
                                <NavLink to="/mytoys"
                                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                    My Toys
                                </NavLink>
                            </li>
                        }
                        {
                            user &&
                            <li>
                                <NavLink to="/addtoys"
                                    className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                    Add Toys
                                </NavLink>
                            </li>
                        }
                        {/* <li>
                            <NavLink to="/blog"
                                className={({ isActive }) => (isActive ? 'text-red-500 underline' : 'default')}>
                                Blogs
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="custom-btn">Start Applying</a> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user &&
                                <div id="app-title" className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            }
                        </label>
                        <ReactTooltip
                            data-tooltip-id="app-title"
                            place="bottom"
                            content="user@gmail.com"
                        />
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                    {
                        user ?
                            <div>
                                <button onClick={handleLogout} className="btn btn-warning btn-outline ms-4">Logout</button>
                            </div>
                            
                            : <Link to='/login'>
                                <button className="btn btn-warning btn-outline ms-4">login</button>
                            </Link>  
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;