import React from 'react';
import logo from '../../../assests/images/logo/nft-logo (1).png'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillBehanceSquare } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer class="footer pl-20 lg:pl-40 bg-secondary  text-slate-300 mt-40 py-20 items-center">
            <div>
                <a class="btn btn-ghost normal-case text-xl flex items-center justify-center relative right-11">
                    <img src={logo} alt="logo" />
                    <p className='relative bottom-3 font-bold font-primary right-5'> skyBee</p>
                </a>
                <p className='mt-12'>The world’s largest digital marketplace for <br /> crypto collectibles and NFTs. Buy, sell, and <br /> discover exclusive digital items.</p>

                <div className='flex items-center gap-4 mt-6'>
                    <span className='bg-slate-800 rounded-md p-2'><AiFillFacebook className='text-xl boder-2 border-white' /></span>
                    <span className='bg-slate-800 rounded-md p-2'><AiFillLinkedin className='text-xl boder-2 border-white' /></span>
                    <span className='bg-slate-800 rounded-md p-2'><AiFillTwitterSquare className='text-xl boder-2 border-white' /></span>
                    <span className='bg-slate-800 rounded-md p-2'><AiFillBehanceSquare className='text-xl boder-2 border-white' /></span>
                </div>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <a class="link link-hover font-semibold">Branding</a>
                <a class="link link-hover font-semibold">Design</a>
                <a class="link link-hover font-semibold">Marketing</a>
                <a class="link link-hover font-semibold">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a class="link link-hover font-semibold">About us</a>
                <a class="link link-hover font-semibold">Contact</a>
                <a class="link link-hover font-semibold">Jobs</a>
                <a class="link link-hover font-semibold">Press kit</a>
            </div>
            <div className='text-end'>
                <span class="footer-title">Legal</span>
                <a class="link link-hover font-semibold">Terms of use</a>
                <a class="link link-hover font-semibold">Privacy policy</a>
                <a class="link link-hover font-semibold">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;