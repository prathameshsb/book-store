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
        <button onClick={handleDelete} className="delete-button">Delete</button>
    );
}

export default DeleteBook;
