import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBookForm from './components/AddBookForm';
import EditBookForm from './components/EditBookForm';
import Navbar from './components/Navbar'; // Adjust the path as needed
import './App.css';

function App() {
    return (
    <div>
      <Navbar/>
      <Router>
        <div className="container mx-auto px-4">
          {/* The <Routes> component renders the first <Route> that matches the URL. */}
          <Routes>
            <Route path="/add-book" element={<AddBookForm />} />
            <Route path="/edit-book/:id" element={<EditBookForm />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/" element={<BookList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
