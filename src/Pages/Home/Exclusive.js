import React, { useState } from 'react';
import { FcRight } from "react-icons/fc"
import { Link, useLocation } from 'react-router-dom';
import useData from '../../hooks/usedata';
import BidModal from '../Shared/BidModal';
import ExclusiveSingle from './ExclusiveSingle';
const Exclusive = () => {
    const url = "exclusive.json"
    const [data, setData] = useData(url)
    const [bid, setBid] = useState(null)
    let [number, setNumber] = useState(4)
    const location = useLocation()
    return (
        <div className='mt-40 px-20 font-secondary '>
            {
                location.pathname === "/" || location.pathname === "/home" ?
                    <>
                        <div className='flex items-center gap-4'>
                            <p className='heading font-bold mb-6 uppercase'>Exclusive Collection</p>
                            <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-3xl font-bold font-secondary mb-12  text-white'>Exclusive Assets</h2>
                            <Link to='/exclusives' className="btn-link btn text-white hover:translate-x-2 hover:text-accent">
                                Explore All
                                <FcRight className='text-xl ml-3 ' />
                            </Link>
                        </div>
                    </>

                    : ""
            }
            {bid && <BidModal setBid={setBid} bid={bid}></BidModal>}
            <div className="exclusive grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
                {
                    location.pathname === "/" || location.pathname === "/home" ? data.slice(0, number).map(item => <ExclusiveSingle
                        key={item.id}
                        item={item}
                        setBid={setBid}
                    ></ExclusiveSingle>)
                        :
                        data.map(item => <ExclusiveSingle
                            key={item.id}
                            item={item}
                            setBid={setBid}
                        ></ExclusiveSingle>)
                }
            </div>
            {
                location.pathname === "/" || location.pathname === "/home" ? <div className='flex itmes-center justify-center mt-10'>
                    <button disabled={number > data.length} onClick={() => {
                        setNumber(number + 4)
                    }} className="btn btn-outline px-12  rounded-full hover:bg-accent border-2 border-white text-white">Load More</button>
                </div>
                    : ""
            }
        </div>
    );
};

export default Exclusive;