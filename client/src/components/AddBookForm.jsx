// AddBookForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/bookActions';
import Banner from './Banner'; // Import the Banner component

function AddBookForm() {
    const [book, setBook] = useState({
        title: '',
        author: '',
        publishYear: ''
    });
    const [banner, setBanner] = useState({ show: false, message: '', type: '' });

    const dispatch = useDispatch();

    const handleChange = e => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming dispatch(addBook(book)) returns a promise
            await dispatch(addBook(book));
            setBanner({ show: true, message: 'Book added successfully!', type: 'success' });
            // Optionally reset form here if needed
            setBook({
                title: '',
                author: '',
                publishYear: ''
            });
        } catch (error) {
            setBanner({ show: true, message: 'Failed to add book. ' + error.message, type: 'error' });
        }
    };

    const closeBanner = () => {
        setBanner({ ...banner, show: false });
    };

    return (
        <div className="container mx-auto my-6">
            {banner.show && (
                <Banner
                    message={banner.message}
                    type={banner.type}
                    onClose={closeBanner}
                />
            )}
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl text-gray-200 mb-4">Add a Book</h2>
                <div className="mb-4">
                    <label className="block text-white mb-2">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2">Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2">Publish Year:</label>
                    <input
                        type="number"
                        name="publishYear"
                        value={book.publishYear}
                        onChange={handleChange}
                        className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded">Add Book</button>
            </form>
        </div>
    );
}

export default AddBookForm;
