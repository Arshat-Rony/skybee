import React from 'react';
import logo from '../../../assests/images/logo/nft-logo (1).png'
import { ImSearch } from 'react-icons/im'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseinit';
import { signOut } from 'firebase/auth';
const Header = () => {
    const menu = <>
        <li ><Link to="/home">Home</Link></li>
        <li ><Link to="/exclusives">Exclusive</Link></li>
        <li ><Link to="/auctions">Auctions</Link></li>
        <li ><Link to="/contact">Contact</Link></li>
    </>
    const [user] = useAuthState(auth)
    return (
        <div className='bg-primary w-screen py-5  pr-5  lg:pr-20'>
            <div class="navbar text-white">
                <div class="navbar-start text-white font-secondary">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-secondary">
                            {menu}
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-xl flex items-center justify-center">
                        <img src={logo} alt="logo" />
                        <p className='relative bottom-3 font-bold font-primary right-5'> skyBee</p>
                    </Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <ul className='menu menu-horizontal '>
                        <li ><a><ImSearch /></a></li>
                        {
                            user ?
                                <li ><button onClick={() => signOut(auth)} className='btn bg-red-500 rounded-md'>Log out</button></li>

                                :
                                <li ><Link to="/login" className='btn bg-zinc-700 rounded-md'>Log in</Link></li>

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;

