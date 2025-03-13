// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddBook from './AddBook';

function App() {
  return (
    <Router>
      <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addBook' element={<AddBook/>} />
      </Routes>
      </div>
    </Router>

  );
    
};

export default App;
