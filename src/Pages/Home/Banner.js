import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import { SiAzuredataexplorer } from 'react-icons/si'
import { MdOutlineEditNote } from "react-icons/md"
import bgpic from '../../../src/assests/images/logo/bg.svg'
import './Banner.css'
const Banner = () => {
    return (
        <div style={{
            background: `url(${bgpic})`,
            backgroundSize: 'cover'
        }} className='banner text-white min-h-[70vh] px-20'>
            <div className='pt-24 relative z-10'>
                <div className='flex items-center gap-4'>
                    <p className='heading font-bold mb-6'>NETSTORM</p>
                    <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
                </div>
                <h1 className='font-extrabold text-5xl lg:text-7xl mb-12 font-primary'>Discover, collect,
                    <br /> and sell
                    <br />
                    extraordinary NFTs</h1>
            </div>
            <div className='flex items-center gap-4  relative z-10 pb-24'>
                <PrimaryBtn>
                    <SiAzuredataexplorer />
                    Explore
                </PrimaryBtn>
                <PrimaryBtn>
                    <MdOutlineEditNote />
                    Explore
                </PrimaryBtn>
            </div>
        </div>
    );
};

export default Banner;