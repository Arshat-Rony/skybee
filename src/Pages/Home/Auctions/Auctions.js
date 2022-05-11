import React, { useState } from 'react';
import useData from '../../../hooks/usedata';
import Auction from '../Auction';

const Auctions = () => {
    const url = "auctions.json"
    let [number, setNumber] = useState(4)
    const [data, setData] = useData(url)

    return (
        <div className='text-white mt-40 px-20 overflow-hidden'>
            <div className='flex items-center gap-4'>
                <p className='heading font-bold mb-6 uppercase'>Auctions</p>
                <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
            </div>
            <h2 className='text-3xl font-bold font-secondary mb-12'>Live Auctions</h2>
            <div className="auctions flex flex-col lg:flex-row flex-nowrap gap-4">
                {
                    data.slice((number - 4), number).map(auction => <Auction
                        key={auction.id}
                        auction={auction}
                    ></Auction>)
                }
            </div>
            <div className='flex items-center gap-4 justify-center mt-8'>
                {
                    [...Array(data.slice(0, 5).length).keys()].map((item, index) =>
                        <button onClick={() => {
                            if (number > 13) {
                                number = 4;
                            }
                            setNumber(number + 1)
                        }} className='bg-accent w-[50px] h-[4px] rounded-sm'
                            key={index} ><span className='text-accent'>{item} </span></button>
                    )
                }
            </div>
        </div>
    );
};

export default Auctions;