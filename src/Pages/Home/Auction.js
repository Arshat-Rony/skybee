import React from 'react';

const Auction = ({ auction }) => {
    const { name, personName, thumbpicture, balance } = auction;
    return (
        <div class="card  shadow-xl bg-secondary">
            <figure class="px-10 pt-10">
                <img src={thumbpicture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{personName}</p>
                <p>{balance}</p>
            </div>
        </div>
    );
};

export default Auction;