// Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/add-book">Add Book</a>
                {/* Add more links as needed */}
            </div>
        </div>
    );
};

export default Navbar;
