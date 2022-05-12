import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import { HiLockClosed } from 'react-icons/hi'
import { FaEthereum } from "react-icons/fa"
const ExclusiveSingle = ({ item }) => {
    const { name, thumbpicture, price, ethar } = item;
    return (
        <div class="card transition-all duration-75 shadow-xl text-white bg-secondary mt-10 lg:mt-4 hover:translate-y-2">
            <figure class="px-10 pt-10">
                <img src={thumbpicture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">{name}</h2>
                <p className='flex items-center'><FaEthereum /> {ethar}</p>
                <p>{price}</p>
                <div class="card-actions">
                    <PrimaryBtn>
                        <HiLockClosed />
                        Place a Bid
                    </PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveSingle;