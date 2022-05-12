
import { FcRight } from "react-icons/fc"
import React from 'react';
import Sell from './Sell';

const data = [
    { id: 1, name: "Set Up your wallet", text: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.' },
    { id: 2, name: "Create your collection", text: 'Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.' },
    { id: 3, name: "Add your NFTs", text: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.' },
    { id: 4, name: "List them for sale", text: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!' },
]
const Sells = () => {
    return (
        <div className="px-20 mt-40">
            <div className='flex items-center gap-4'>
                <p className='heading font-bold mb-6 uppercase'>How it Works</p>
                <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
            </div>
            <h2 className='text-3xl font-bold font-secondary mb-12 text-white'>Create and sell your NFTs</h2>


            <div className="sells grid grid-cols-1 lg:grid-cols-4">
                {
                    data.map((sell, index) => <Sell
                        key={sell.id}
                        sell={sell}
                        index={index}
                    />)
                }
            </div>
        </div>
    );
};

export default Sells;