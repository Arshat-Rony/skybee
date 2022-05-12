import React from 'react';

const Artist = (props) => {
    const { name, img, number } = props.artist;
    return (
        <div class="card bg-secondary flex-row  items-center justify-start mt-10 font-secondary px-10 cursor-pointer">
            <figure class="">
                <img style={{ height: "64px", width: "64px" }} src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body  text-start text-white hover:text-accent">
                <h2 class="card-title">{name}</h2>
                <p className='text-slate-400'>{number} items available</p>
            </div>
        </div>
    );
};

export default Artist;