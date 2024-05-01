import React, { useState, useEffect } from 'react';
import useAPI from '../hooks/useAPI';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import './DeletePostContent.css';

const DeletePostContent = () => {
  const navigate = useNavigate();

  const { data: blogs, error, isLoading } = useAPI('http://localhost:3000/blogs', {});

  const { formValues, setFormValues, handleSubmit } = useForm({
    selectedID: '',
    title: '',
  });

  const setSelectedIDAndTitle = (selectedID) => {
    const selectedBlog = blogs.find(blog => blog.id === selectedID);
    setFormValues((prevValues) => ({
      ...prevValues,
      selectedID,
      title: selectedBlog?.title || '',
    }));
  };

  const handleDelete = async (formValues) => {
    const { selectedID } = formValues;

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Delete Post</h1>
        <form onSubmit={handleSubmit(handleDelete)} className="form">
          <label htmlFor="postID">Select Post</label>
          <select
            className="input"
            id="postID"
            name="selectedID"
            value={formValues.selectedID}
            onChange={(e) => setSelectedIDAndTitle(e.target.value)}
          >
            {blogs.map(blog => (
              <option key={blog.id} value={blog.id}>{`${blog.id}: ${blog.title}`}</option>
            ))}
          </select>

          <div className = "post-details">
            <label>Title:</label>
            <span>{formValues.title}</span>
          </div>

          <div className="buttons">
            <button className="button" type="button" onClick={() => navigate('/Admin')}>Back to Admin</button>
            <button className="button delete" type="submit">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeletePostContent;
