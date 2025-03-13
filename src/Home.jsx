// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate();
  const handleAddBook=()=>{
    navigate('/AddBook')
  }
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
       
        <button className="add-book-button" onClick={handleAddBook}>AddBook</button>
    
      </div>
    </div>
  );
};

export default Home;
