import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import { HiLockClosed } from 'react-icons/hi'
import { FaEthereum } from "react-icons/fa"
import BidModal from '../Shared/BidModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
const ExclusiveSingle = ({ item, setBid }) => {
    const { name, thumbpicture, price, ethar } = item;
    const [user] = useAuthState(auth)
    return (
        <div class="card transition-all duration-75 shadow-xl text-white bg-secondary mt-10 lg:mt-4 hover:translate-y-2">
            <figure class="px-10 pt-10">
                <img src={thumbpicture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">{name}</h2>
                <p className='flex items-center'><FaEthereum /> {ethar}</p>
                <p>{price}</p>
                <div class="card-actions mt-8">
                    {/* <PrimaryBtn for="bid-modal" class="btn modal-button">
                       
                    </PrimaryBtn> */}
                    <label onClick={() => setBid(item)} for="bid-modal" class="btn modal-button flex items-center  gap-4 bg-secondary rounded-full hover:bg-gradient-to-r from-accent to-neutral">
                        <HiLockClosed />
                        Place a Bid
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveSingle;