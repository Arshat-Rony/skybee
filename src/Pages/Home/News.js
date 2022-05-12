import React from 'react';
import { FcRight } from "react-icons/fc"
import SingleNews from './SingleNews';
const news = [
    { id: 1, heading: "The Lost Art of Photography", text: "Non-fungible tokens can digitally represent any asset, including online-only assets like digital artwork and real assets such as real estate. Other examples of the assets that NFTs can represent include in-game items like avatars, digital and non-digital collectibles, domain names, and event tickets.", name: "Nike Jon", photo: "https://i.ibb.co/C8VDKBw/blog-6-1.jpg" },
    { id: 2, heading: "The Lost Art of Photography", text: "Non-fungible tokens can digitally represent any asset, including online-only assets like digital artwork and real assets such as real estate. Other examples of the assets that NFTs can represent include in-game items like avatars, digital and non-digital collectibles, domain names, and event tickets.", name: "Mila Jahan", photo: "https://i.ibb.co/0B1DGZV/blog-13-1.jpg" },
    { id: 3, heading: "The Lost Art of Photography", text: "Non-fungible tokens can digitally represent any asset, including online-only assets like digital artwork and real assets such as real estate. Other examples of the assets that NFTs can represent include in-game items like avatars, digital and non-digital collectibles, domain names, and event tickets.", name: "Amit Patwory", photo: "https://i.ibb.co/qFGjrZr/blog-15-1.jpg" },
]
const News = () => {
    return (
        <div className='mt-40 px-20'>
            <div className='flex items-center gap-4'>
                <p className='heading font-bold mb-6 uppercase'>Auctions</p>
                <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-bold font-secondary mb-12'>Live Auctions</h2>
                <button className="btn-link btn text-white hover:translate-x-2 hover:text-accent">
                    Explore All
                    <FcRight className='text-xl ml-3 ' />
                </button>
            </div>

            <div className="news grid grid-cols-1 lg:grid-cols-3">
                {
                    news.map(item => <SingleNews
                        key={item.id}
                        item={item}
                    ></SingleNews>)
                }
            </div>
        </div>
    );
};

export default News;