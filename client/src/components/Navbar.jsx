// Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
    <div className="bg-blue-900 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-white text-lg font hover:underline">Home</a>
        <a href="/add-book" className="text-white text-lg font hover:underline">Add Book</a>
        {/* Add more links as needed */}
      </div>
    </div>
    );
};

export default Navbar;
