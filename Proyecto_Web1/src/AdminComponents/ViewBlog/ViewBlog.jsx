import React from 'react';
import Blog from '../../HomePage'; 
import './ViewBlog.css'; 

function ViewBlog() {
  return (
    <div>
      <Blog />

      <button className="return-button" onClick={() => window.history.back()}>Return</button>
    </div>
  );
}

export default ViewBlog;
