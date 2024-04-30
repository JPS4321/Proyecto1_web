import React, { useState } from 'react';
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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
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
    console.log('Response status:', response.status);
    const result = await response.json();
    console.log('Response body:', result);

    if (result) {
      console.log('Post uploaded successfully:', result);
      navigate('/Admin'); // Navigate to Admin upon success
    } else {
      alert('Failed to upload post');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Create Post</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleUpload(); }} className="form">
          <label htmlFor="title">Post Title</label>
          <input
            className="input"
            id="title"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="content">Post Content</label>
          <textarea
            className="input"
            id="content"
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label htmlFor="image">Upload Image</label>
          <input
            className="input"
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="button" type="submit">Submit</button>
          
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
