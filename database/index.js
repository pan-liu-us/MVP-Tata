const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config();
const PW = process.env.MONGODB_PW

mongoose.connect(`mongodb+srv://pan:${PW}@mvp.ha141ti.mongodb.net/tata?retryWrites=true&w=majority`,
                 {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
          console.log('MANGO CONNECTION OPEN!!')
        })
        .catch((err) => {
          console.log('OH ERROR ABOUT MANGO CONNECTION!!');
          console.log(err)
        })

const postSchema = new Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: String,
  comments: String,
  shares: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;