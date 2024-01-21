// DeleteBook.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../actions/bookActions';

function DeleteBook({ bookId }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        // Dispatch the deleteBook thunk with the bookId
        dispatch(deleteBook(bookId));
        // Optionally navigate away or trigger a UI update
    };

    return (
        <button onClick={handleDelete} className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Delete</button>
    );
}

export default DeleteBook;
