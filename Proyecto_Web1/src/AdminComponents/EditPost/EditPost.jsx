import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
  const navigate = useNavigate();
  const [postIDs, setPostIDs] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    const fetchIDs = async () => {
      const response = await fetch('http://localhost:3000/blogs');
      const blogs = await response.json();
      setPostIDs(blogs.map(blog => blog.id));
    };
    fetchIDs();
  }, []);

  useEffect(() => {
    if (!selectedID) return;
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/blogs/${selectedID}`);
      const [blog] = await response.json();
      setTitle(blog.title);
      setContent(blog.content);
      setImageData(blog.image_data);
    };
    fetchData();
  }, [selectedID]);

  const handleUpdate = async () => {
    if (!title || !content) {
      alert('Fields cannot be blank');
      return;
    }

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
  };

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

          {/* Hidden input to store imageData */}
          <input type="hidden" value={imageData} onChange={() => {}} />

          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;