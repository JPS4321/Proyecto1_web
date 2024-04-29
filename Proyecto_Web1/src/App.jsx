import React from 'react';
import HomePage from './HomePage';
import AdminPage from './Admin/AdminPage';
import Login from './Admin/Login';
import ViewBlog from './Admin/ViewBlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/view" element={<ViewBlog />} />



      </Routes>
    </Router>
  );
};

export default App;
