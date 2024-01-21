import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route to save a book to the database
router.post("/", async (req, res) => {
  try {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).json(book); // Send JSON response
  } catch (err) {
    console.log("this is the error: ", err);
    return res.status(500).json({ error: err.message }); // Send error as JSON
  }
});

// Route to update a book in the database
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book); // Send JSON response
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message }); // Send error as JSON
  }
});

// Route to delete a book from the database
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted successfully!" }); // Corrected to send a single response
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message }); // Send error as JSON
  }
});

// Route to get all the books from the database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ length: books.length, data: books });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message }); // Send error as JSON
  }
});

// Route to get a specific book from the database
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book); // Send JSON response
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message }); // Send error as JSON
  }
});

export default router;
