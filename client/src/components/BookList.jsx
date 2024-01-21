// BookList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import DeleteBook from './DeleteBook'; // Import the DeleteBook component

function BookList() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.book.books);
    const loading = useSelector(state => state.book.loading);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2>Book List</h2>
            <ul className="book-list">
                {books.map(book => (
                    <li key={book._id} className="book-item">
                        <span className="book-title">{book.title}</span>
                        {/* Add the DeleteBook component here */}
                        <DeleteBook bookId={book._id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
