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
     <div className="container">
            <div className="book-detail">
                <h2>Book Detail</h2>
                <p className="book-info">Title: {book.title}</p>
                <p className="book-info">Author: {book.author}</p>
                <p className="book-info">Publish Year: {book.publishYear}</p>
                {/* Add Edit and Delete buttons here */}
            </div>
        </div>
  );
}

export default BookDetail;
