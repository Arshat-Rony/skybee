import React from 'react';
import Artist from './Artist';
import Auctions from './Auctions/Auctions';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Auctions></Auctions>
            <Artist></Artist>
        </div>
    );
};

export default Home; 