// Banner.jsx
import React from 'react';

const Banner = ({ message, type, onClose }) => {
    return (
        <div className={`banner ${type}`}>
            <span>{message}</span>
            <button onClick={onClose} className="close-btn">&times;</button>
        </div>
    );
};

export default Banner;
