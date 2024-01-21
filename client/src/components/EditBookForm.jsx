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
        <div className="container mx-auto my-6">
            {banner.show && (
                <Banner
                    message={banner.message}
                    type={banner.type}
                    onClose={closeBanner}
                />
            )}
            <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-blue-300 mb-6">Edit Book</h2>
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
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Book</button>
            </form>
        </div>
    );
}

export default EditBookForm;
