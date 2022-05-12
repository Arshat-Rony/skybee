import React from 'react';
import Artists from './Artists/Artists';
import Auctions from './Auctions/Auctions';
import Banner from './Banner';
import Exclusive from './Exclusive';
import News from './News';
import Sells from './Sells';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Auctions></Auctions>
            <Artists></Artists>
            <Exclusive></Exclusive>
            <Sells></Sells>
            <News></News>
        </div>
    );
};

export default Home; 