import React from 'react';
import HomePage from './HomePage';
import Login from './AdminComponents/Login';
import AdminPage from './AdminComponents/AdminPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        

      </Routes>
    </Router>
  );
};

export default App;
