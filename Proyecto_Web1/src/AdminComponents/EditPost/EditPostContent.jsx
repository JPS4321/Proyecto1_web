import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditPostContent.css';

const EditPostContent = () => {
  const navigate = useNavigate();
  const [postIDs, setPostIDs] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageData, setImageData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs');
        const blogs = await response.json();
        setPostIDs(blogs.map(blog => blog.id));
        setIsLoading(false);

        // Set default values for title, content, and imageData based on the first blog
        if (blogs.length > 0) {
          const [firstBlog] = blogs;
          setTitle(firstBlog.title);
          setContent(firstBlog.content);
          setImageData(firstBlog.image_data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedID) return;
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${selectedID}`);
        const [blog] = await response.json();
        setTitle(blog.title);
        setContent(blog.content);
        setImageData(blog.image_data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedID]);

  const handleUpdate = async () => {
    if (!title || !content) {
      alert('Fields cannot be blank');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/blogs/${selectedID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, image_data: imageData }),
      });

      if (response.ok) {
        navigate('/Admin');
      } else {
        alert('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Edit Post</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="form">
          <label htmlFor="postID">Select Post</label>
          <select
            className="input"
            id="postID"
            value={selectedID}
            onChange={(e) => setSelectedID(e.target.value)}
          >
            {postIDs.map(id => <option key={id} value={id}>{id}</option>)}
          </select>

          <label htmlFor="title">Post Title</label>
          <input
            className="input"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="content">Post Content</label>
          <textarea
            className="input"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditPostContent;
