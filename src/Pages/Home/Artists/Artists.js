import React from 'react';
import Artist from './Artist';
import { FcRight } from "react-icons/fc"

const artists = [
    { id: 1, name: "Clone X", number: "5", img: "https://i.ibb.co/ZGJGX5D/clonex-150x61-1.png" },
    { id: 2, name: "Doodles", number: "4", img: "https://i.ibb.co/PYHxSpB/doodles-150x150-1.jpg" },
    { id: 3, name: "Gutter Clones", number: "5", img: "https://i.ibb.co/nr6vJ1k/genesis-creepz-150x150-1.png" },
    { id: 4, name: "Nyqan Cat (Official)", number: "7", img: "https://i.ibb.co/LpvnbCS/gutter-clones-150x150-1.png" },
    { id: 5, name: "Phanta Bear", number: "2", img: "https://i.ibb.co/126gQz6/nyan-cat-official-150x150-1.jpg" },
    { id: 6, name: "Creepz Genesis", number: "9", img: "https://i.ibb.co/16r5fBk/phantabear-150x150-1.jpg" },
]

const Artists = () => {
    return (
        <div className='mt-40 px-20'>
            <div className='flex items-center gap-4'>
                <p className='heading font-bold mb-6 uppercase'>Most Trending</p>
                <div className='relative z-10 w-[100px] h-1 bg-gradient-to-r from-accent to-neutral'></div>
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-bold font-secondary mb-8  text-white'>Popular Collections</h2>
            </div>

            <div className="artists grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
                {
                    artists.map(artist => <Artist
                        key={artist.id}
                        artist={artist}
                    ></Artist>)
                }
            </div>
        </div>
    );
};

export default Artists;