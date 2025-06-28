import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage.jsx';
import ProductPage from './pages/Productpage.jsx'; // 👈 Add this line

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* 👈 New Route */}
      </Routes>
    </Router>
  );
}

export default App;

