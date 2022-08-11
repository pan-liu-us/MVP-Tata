const express = require('express');
const path = require('path');
require('dotenv').config();

const Post = require('../database/index.js')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post(`/tata/posts/${process.env.SECRET}`, async(req, res) => {
  try {
    const addPost = await Post.create(req.body)
    res.status(200).json(addPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT} :)`));