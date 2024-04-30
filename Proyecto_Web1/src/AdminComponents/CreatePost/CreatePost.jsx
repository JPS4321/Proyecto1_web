import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const CreatePost = () => {
  const navigate = useNavigate();

  const { formValues, handleChange, handleSubmit } = useForm({
    title: '',
    content: '',
    image: null,
  });

  const handleUpload = async (formValues) => {
    const { title, content, image } = formValues;
    if (!title || !content || !image) {
      alert('Datos en blanco');
      return;
    }

    const base64Image = await toBase64(image);
    const response = await fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, image_data: base64Image }),
    });
    
    const result = await response.json();
    if (result) {
      console.log('Post uploaded successfully:', result);
      navigate('/Admin');
    } else {
      alert('Failed to upload post');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Create Post</h1>
        <form onSubmit={handleSubmit(handleUpload)} className="form">
          <label htmlFor="title">Post Title</label>
          <input
            className="input"
            id="title"
            type="text"
            placeholder="Enter Title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />

          <label htmlFor="content">Post Content</label>
          <textarea
            className="input"
            id="content"
            placeholder="Enter Content"
            name="content"
            value={formValues.content}
            onChange={handleChange}
          />

          <label htmlFor="image">Upload Image</label>
          <input
            className="input"
            id="image"
            type="file"
            onChange={(e) => handleChange({ target: { name: 'image', value: e.target.files[0] } })}
          />

          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
