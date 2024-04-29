import React from 'react';
import Blog from '../HomePage'; // Import Blog component
import './ViewBlog.css'; // Import CSS
import { useNavigate } from 'react-router-dom';


function ViewBlog() {
    const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Blog />

      {/* Floating Return Button */}
      <button className="return-button" onClick={() => handleButtonClick('/admin')}>Return</button>
    </div>
  );
}

export default ViewBlog;
