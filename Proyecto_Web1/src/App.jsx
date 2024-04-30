import React from 'react';
import HomePage from './HomePage';
import Login from './AdminComponents/Login/Login'
import AdminPage from './AdminComponents/AdminPage/AdminPage';
import ViewBlog from './AdminComponents/ViewBlog/ViewBlog';
import CreatePost from './AdminComponents/CreatePost/CreatePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/Admin/view" element={<ViewBlog />} />
        <Route path="/Admin/create" element={<CreatePost />} />

      </Routes>
    </Router>
  );
};

export default App;
