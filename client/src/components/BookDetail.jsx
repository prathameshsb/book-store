// BookDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../actions/bookActions'; // Adjust the path as per your project structure
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(state =>
    state.book.books.find(book => book._id === id)
  );

  useEffect(() => {
    dispatch(fetchBook(id)); // Dispatch the fetchBook thunk
  }, [dispatch, id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg my-6">
      <h2 className="text-xl mb-4 text-blue-300">Book Detail</h2>
      <p className="text-white mb-2">Title: {book.title}</p>
      <p className="text-white mb-2">Author: {book.author}</p>
      <p className="text-white">Publish Year: {book.publishYear}</p>
      {/* Add Edit and Delete buttons here */}
    </div>
  );
}

export default BookDetail;
