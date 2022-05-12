import React, { useState } from 'react';
import { FcRight } from "react-icons/fc"
import useData from '../../hooks/usedata';
import PrimaryBtn from '../Shared/PrimaryBtn';
import ExclusiveSingle from './ExclusiveSingle';
const Exclusive = () => {
    const url = "exclusive.json"
    const [data, setData] = useData(url)
    let [number, setNumber] = useState(4)
    console.log(number)
    return (
        <div className='mt-40 px-20 font-secondary '>
            <div className='flex items-center gap-4'>
                <p className='heading font-bold mb-6 uppercase'>Exclusive Collection</p>
                <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-bold font-secondary mb-12  text-white'>Exclusive Assets</h2>
                <button className="btn-link btn text-white hover:translate-x-2 hover:text-accent">
                    Explore All
                    <FcRight className='text-xl ml-3 ' />
                </button>
            </div>

            <div className="exclusive grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
                {
                    data.slice(0, number).map(item => <ExclusiveSingle
                        key={item.id}
                        item={item}
                    ></ExclusiveSingle>)
                }
            </div>
            <div className='flex itmes-center justify-center mt-10'>
                <button disabled={number > data.length} onClick={() => {
                    setNumber(number + 4)
                }} className="btn btn-outline px-12  rounded-full hover:bg-accent border-2 border-white text-white">Load More</button>
            </div>
        </div>
    );
};

export default Exclusive;