// /src/actions/bookActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_ENDPOINT = "http://localhost:3000/book";

// Fetch all books
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch(`${API_ENDPOINT}`);
  const data = await response.json();
  return data;
});

// Fetch a single book by id
export const fetchBook = createAsyncThunk("books/fetchBook", async (bookId) => {
  const response = await fetch(`${API_ENDPOINT}/${bookId}`);
  const data = await response.json();
  return data;
});

// Add a new book
export const addBook = createAsyncThunk("books/addBook", async (newBook) => {
  const response = await fetch(`${API_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  });
  const data = await response.json();
  return data;
});

// Delete a book by id
export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    await fetch(`${API_ENDPOINT}/${bookId}`, {
      method: "DELETE",
    });
    return bookId; // Return the id of the deleted book to remove it from the state
  }
);

// Update a book
export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ id, updatedBook }) => {
    const response = await fetch(`${API_ENDPOINT}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
    const data = await response.json();
    return { id, book: data };
  }
);
