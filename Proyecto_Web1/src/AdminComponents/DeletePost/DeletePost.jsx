import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeletePost.css';

const DeletePost = () => {
  const navigate = useNavigate();
  const [postIDs, setPostIDs] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs');
        const blogs = await response.json();
        setPostIDs(blogs.map(blog => blog.id));
        setIsLoading(false);

        if (blogs.length > 0) {
          setTitle(blogs[0].title);
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedID]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${selectedID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/Admin');
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Delete Post</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleDelete(); }} className="form">
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
            disabled
          />

          <div className="button-container">
            <button className="button" type="button" onClick={() => navigate('/Admin')}>Back</button>
            <button className="button" type="submit">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeletePost;
