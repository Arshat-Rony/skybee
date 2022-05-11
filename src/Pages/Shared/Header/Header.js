import React from 'react';
import logo from '../../../assests/images/logo/nft-logo (1).png'
const Header = () => {
    const menu = <>
        <li><a>Home</a></li>
        <li><a>Activity</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className='bg-primary w-screen py-5 overflow-hidden'>
            <div class="navbar text-white">
                <div class="flex-1 justify-between">
                    <a class="btn btn-ghost normal-case text-xl flex items-center justify-center">
                        <img src={logo} alt="logo" />
                        <p className='relative bottom-3 font-bold font-primary right-5'> skyBee</p>
                    </a>
                    <div class="dropdown lg:hidden ">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu bg-primary menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 relative right-[250px] top-[70px]">
                            {menu}
                        </ul>
                    </div>
                </div>

                <div class="flex-none">
                    <div className=' lg:block hidden'>
                        <ul class="menu menu-horizontal p-0">
                            {menu}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;