import React from 'react';
import { FaRegUser } from "react-icons/fa"
import "./SinlgeNews.css"
const SingleNews = ({ item }) => {
    const { name, photo, heading, text } = item;
    return (
        <div style={{
            background: `url(${photo})`,
            backgroundSize: "cover"
        }} class="card news_card mt-10 lg:mt-0">
            <div class="card-body text-white  font-secondary relative z-10 hover:bg-gradient-to-b from-accent to-neutral">
                <h2 class="card-title text-2xl mb-6 ">{heading}</h2>
                <p>{text}</p>
                <hr className='my-5' />
                <p className='flex items-center gap-4'><FaRegUser /> {name}</p>
            </div>
        </div>
    );
};

export default SingleNews;