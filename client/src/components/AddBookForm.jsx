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
        <div className="container">
            {banner.show && (
                <Banner
                    message={banner.message}
                    type={banner.type}
                    onClose={closeBanner}
                />
            )}
            <form onSubmit={handleSubmit} className="book-form">
                <h2>Add a Book</h2>
                <div className="form-group">
                    <label className="label">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="label">Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="label">Publish Year:</label>
                    <input
                        type="number"
                        name="publishYear"
                        value={book.publishYear}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBookForm;
