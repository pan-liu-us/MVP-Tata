const express = require('express');
const path = require('path');
require('dotenv').config();

const Post = require('../database/index.js')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/test', (req, res) => {
  res.send('it works');
});

app.post('/tata/posts'), (req, res) => {
  const posts = req.body;
  Post.create(posts), (err, data) => {
    if(err) {
      res.status(400).send(err)
    } else {
      res.status(201).json(data)
    }
  }
}

app.listen(PORT, () => console.log(`Listening on port ${PORT} :)`));