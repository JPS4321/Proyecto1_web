import React from 'react';
import Blog from '../../HomePage'; // Import Blog component
import './ViewBlog.css'; // Import CSS

function ViewBlog() {
  return (
    <div>
      <Blog />

      {/* Floating Return Button */}
      <button className="return-button" onClick={() => window.history.back()}>Return</button>
    </div>
  );
}

export default ViewBlog;
