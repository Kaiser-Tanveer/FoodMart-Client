import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // Creating Menu items 
    const menuItem =
        <>
            <li className='font-semibold'><Link to='/'>Home</Link></li>
            <li className='font-semibold'><Link to='/services'>Services</Link></li>
            {
                user?.uid &&
                <>
                    <li className='font-semibold'><Link to='/myReview'>All Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addService'>Add Service</Link></li>
                </>
            }
            <li className='font-semibold'><Link to='/blog'>blog</Link></li>
        </>
    return (
        <div className="navbar h-20 pt-12 bg-base-100 items-center pb-10 shadow-lg shadow-gray-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src="foodFavicon.ico" alt="SiteLoge" /><p className='text-3xl font-bold'>Food<span className='text-primary'>Mart</span></p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <button onClick={() => logOut().then(() => { }).then(err => console.error(err))} className="btn btn-outline btn-error text-white">Log Out</button>
                        </>
                        :
                        <Link to='/register'><button className="btn btn-outline btn-primary">Register</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;