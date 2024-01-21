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
        <div className="mt-6">
            <h2>Book List</h2>
            <ul className="space-y-4">
                {books.map(book => (
                    <li key={book._id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center transform hover:translate-y-1 hover:shadow-2xl transition duration-200">
                        <span className="text-xl text-gray-300">{book.title}</span>
                        <DeleteBook bookId={book._id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
