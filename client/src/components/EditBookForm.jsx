// EditBookForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook } from '../actions/bookActions';
import { useParams } from 'react-router-dom';

function EditBookForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bookToEdit = useSelector(state =>
    state.book.books.find(book => book._id === id)
  );

  const [book, setBook] = useState({
    title: '',
    author: '',
    publishYear: ''
  });

  useEffect(() => {
    if (!bookToEdit) {
      dispatch(fetchBook(id)); // Dispatch the fetchBook thunk to get the book details
    } else {
      setBook(bookToEdit);
    }
  }, [dispatch, id, bookToEdit]);

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBook({ id, updatedBook: book })); // Dispatch the updateBook thunk
    // Optionally reset the form or navigate away
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      {/* ... form fields similar to AddBookForm ... */}
    </form>
  );
}

export default EditBookForm;
