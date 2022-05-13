import React, { useState } from 'react';
import useData from '../../../hooks/usedata';
import Auction from '../Auction';
import { FcRight } from "react-icons/fc"
import { Link, useLocation } from 'react-router-dom';

const Auctions = () => {
    const url = "auctions.json"
    let [number, setNumber] = useState(4)
    const [data, setData] = useData(url)
    const location = useLocation()

    return (
        <div className='text-white mt-40 px-20 overflow-hidden'>
            {
                location.pathname === "/" || location.pathname === "/home" ? <>
                    <div className='flex items-center gap-4'>
                        <p className='heading font-bold mb-6 uppercase'>Auctions</p>
                        <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-3xl font-bold font-secondary mb-12'>Live Auctions</h2>
                        <Link to="/auctions" className="btn-link btn text-white hover:translate-x-2 hover:text-accent">
                            Explore All
                            <FcRight className='text-xl ml-3 ' />
                        </Link>
                    </div>
                </> : " "
            }
            <div className="auctions grid grid-cols-1 lg:grid-cols-4 gap-4">
                {
                    location.pathname === "/" || location.pathname === "/home" ?
                        data.slice((number - 4), number).map(auction => <Auction
                            key={auction.id}
                            auction={auction}
                        ></Auction>)
                        :
                        data.map(auction => <Auction
                            key={auction.id}
                            auction={auction}
                        ></Auction>)
                }
            </div>
            <div className='flex items-center gap-4 justify-center mt-8'>
                {
                    location.pathname === "/" || location.pathname === "/home" ? [...Array(data.slice(0, 5).length).keys()].map((item, index) =>
                        <button onClick={() => {
                            if (number > 13) {
                                number = 4;
                            }
                            setNumber(number + 1)
                        }} className='bg-accent w-[50px] h-[4px] rounded-sm'
                            key={index} ><span className='text-accent'>{item} </span></button>
                    )
                        : ""
                }
            </div>
        </div>
    );
};

export default Auctions;