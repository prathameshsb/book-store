// Banner.jsx
import React from 'react';

const Banner = ({ message, type, onClose }) => {
    return (
        <div className={`p-4 mb-4 rounded flex justify-between items-center font-bold ${type === 'success' ? 'bg-blue-300' : 'bg-red-300'}`}>
            <span>{message}</span>
            <button onClick={onClose} className="text-white">×</button>
        </div>
    );
};

export default Banner;
