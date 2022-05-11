import React from 'react';
import './PrimaryBtn.css'
const PrimaryBtn = ({ children }) => {
    return (
        <button className='primary_btn border-white rounded-full py-3 px-6 flex items-center justify-center gap-4 border-2 text-white'>
            {children}
        </button>
    );
};

export default PrimaryBtn;