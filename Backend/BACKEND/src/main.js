import express from 'express';
import fs from 'fs'; 
import { getAllPosts, createPost, deletePost, GetPostID, putpost } from './db.js';
import cors from 'cors';

const app = express();
app.use(cors()); 
const port = 3000;
app.use(express.json({ limit:'5mb'}));

app.get('/', (req, res) => {
  res.send('Prueba API');
});

function validateBlogRequest(req, res, next) {
  const { title, content, image_data } = req.body;
  if (!title || !content) {
    return res.status(400).send('Bad Request: Title and content are required.');
  }
  next();
}

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await getAllPosts();
    res.json(blogs);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/blogs/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await GetPostID(id);
    if (blog.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.json(blog);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/blogs', validateBlogRequest, async (req, res) => {
  try {
    const { title, content, image_data } = req.body;
    const result = await createPost(title, content, image_data); 
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/blogs/:id', validateBlogRequest, async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content, image_data } = req.body; 
    const result = await putpost(id, title, content, image_data); 
    if (result.affectedRows === 0) {
      return res.status(404).send('Post not found');
    }
    res.send('Post updated successfully');
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/blogs/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deletePost(id);
    if (result.affectedRows === 0) {
      return res.status(404).send('Post not found');
    }
    res.send('Post deleted successfully');
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
