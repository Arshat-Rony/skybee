import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <ReactLoading type={type} color={color} height={300} width={200} />
        </div>
    );
};

export default Loading;