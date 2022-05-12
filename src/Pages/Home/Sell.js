import React from 'react';
import { IoWalletSharp } from 'react-icons/io5'
import { BsFillWalletFill, BsFillBagFill } from "react-icons/bs"
import { AiFillAppstore } from "react-icons/ai"
const Sell = ({ sell, index }) => {
    const { name, text } = sell;
    return (
        <div class="card text-white font-secondary shadow-xl">
            <div class="card-body">
                <>
                    {index === 0 && <IoWalletSharp className=' text-blue-700 text-5xl' />}
                </>
                <>
                    {index === 1 && <AiFillAppstore className=' text-blue-700 text-5xl' />}
                </>
                <>
                    {index === 2 && <BsFillWalletFill className=' text-blue-700 text-5xl' />}
                </>
                <>
                    {index === 3 && <BsFillBagFill className=' text-blue-700 text-5xl' />}
                </>
                <h2 class="text-2xl mt-3 font-bold ">{name}</h2>
                <p className='text-slate-500'>{text}</p>
            </div>
        </div>
    );
};

export default Sell;