// /src/reducers/bookReducer.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_ENDPOINT = "http://localhost:3000/book";

// Async thunks
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch(`${API_ENDPOINT}`);
  const data = await response.json();
  return data;
});

export const fetchBook = createAsyncThunk("books/fetchBook", async (bookId) => {
  const response = await fetch(`${API_ENDPOINT}/${bookId}`);
  const data = await response.json();
  return data;
});

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

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    await fetch(`${API_ENDPOINT}/${bookId}`, {
      method: "DELETE",
    });
    return bookId; // Return the id of the deleted book to remove it from the state
  }
);

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

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Synchronous reducers here if needed
    booksLoading: (state) => {
      state.loading = true;
    },
    booksError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.books = [action.payload];
        state.loading = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book._id !== action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(
          (book) => book._id === action.payload.id
        );
        if (index !== -1) {
          state.books[index] = action.payload.book;
        }
      });
    // Handle other states like pending or rejected if needed
  },
});

export const { booksLoading, booksError } = bookSlice.actions;

export default bookSlice.reducer;
