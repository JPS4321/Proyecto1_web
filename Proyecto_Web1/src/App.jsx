import React from 'react';
<<<<<<< HEAD
import HomePage from './HomePage';
import AdminPage from './Admin/AdminPage';
import Login from './Admin/Login';
import ViewBlog from './Admin/ViewBlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

=======
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './AdminComponents/Login/Login';
import AdminPage from './AdminComponents/AdminPage/AdminPage';
import ViewBlog from './AdminComponents/ViewBlog/ViewBlog';
import CreatePost from './AdminComponents/CreatePost/CreatePost';
import EditPost from './AdminComponents/EditPost/EditPost';
import DeletePost from './AdminComponents/DeletePost/DeletePost';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const ProtectedRoute = ({ element, ...rest }) => {
  const location = useLocation();
  return isAuthenticated() ? element : <Navigate to="/login" state={{ from: location }} />;
};

>>>>>>> PRUEBA-TALVEZ
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/view" element={<ViewBlog />} />



      </Routes>
    </Router>
  );
};

=======
        <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} />
        <Route path="/Admin/view" element={<ProtectedRoute element={<ViewBlog />} />} />
        <Route path="/Admin/create" element={<ProtectedRoute element={<CreatePost />} />} />
        <Route path="/Admin/edit" element={<ProtectedRoute element={<EditPost />} />} />
        <Route path="/Admin/delete" element={<ProtectedRoute element={<DeletePost />} />} />
      </Routes>
    </Router>
  );
};

>>>>>>> PRUEBA-TALVEZ
export default App;
