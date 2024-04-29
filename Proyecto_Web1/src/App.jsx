import React from 'react';
import HomePage from './HomePage';
import AdminPage from './Admin/AdminPage';
import Login from './Admin/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
};

export default App;
